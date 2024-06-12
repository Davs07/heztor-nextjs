"use client"
import React, { useEffect } from 'react';
import {useHabitsStore} from '@/api/stores/habitStore';

const HabitsList: React.FC = () => {
  const habits = useHabitsStore((state) => state.habits);
  const fetchHabits = useHabitsStore((state) => state.fetchHabits);
  const deleteHabit = useHabitsStore((state) => state.deleteHabit);

  useEffect(() => {
    fetchHabits();
  }, [fetchHabits]);

  return (
    <div>
      <h2>Habits List</h2>
      <ul>
        {habits.map((habit) => (
          <li key={habit.id}>
            {habit.name} - {habit.description}
            <button onClick={() => deleteHabit(habit.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitsList;
