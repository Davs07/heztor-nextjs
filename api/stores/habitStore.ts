import create from "zustand";
import axios from "axios";

interface Habit {
  id: string;
  name: string;
  description: string;
  userId: string;
}

interface HabitsState {
  habits: Habit[];
  fetchHabits: () => Promise<void>;
  createHabit: (habit: Omit<Habit, "id">) => Promise<void>;
  deleteHabit: (id: string) => Promise<void>;
}

const useHabitsStore = create<HabitsState>((set) => ({
  habits: [],
  fetchHabits: async () => {
    try {
      const response = await axios.get("http://localhost:3000/habits");
      set({ habits: response.data });
    } catch (error) {
      console.error("Error fetching habits:", error);
    }
  },
  createHabit: async (habit) => {
    try {
      const response = await axios.post("http://localhost:3000/habits", habit);
      set((state) => ({
        habits: [...state.habits, response.data],
      }));
    } catch (error) {
      console.error("Error creating habit:", error);
    }
  },
  deleteHabit: async (id) => {
    try {
      await axios.delete(`http://localhost:3000/habits/${id}`);
      set((state) => ({
        habits: state.habits.filter((habit) => habit.id !== id),
      }));
    } catch (error) {
      console.error("Error deleting habit:", error);
    }
  },
}));

export default useHabitsStore;
