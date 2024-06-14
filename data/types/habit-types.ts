// User
export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

// Category
export interface Category {
  id: number;
  name: string;
}

// Habit Priority
export type HabitPriority = "very_high" | "high" | "medium" | "low";

// Goal Type
export type GoalType = "count" | "timer" | "boolean";

// Habit
export interface Habit {
  id: number;
  userId: number;
  name: string;
  description?: string;
  priority: HabitPriority;
  categoryId: number;
  goalType: GoalType;
  goalValue?: number;
  frequencyType: "daily" | "weekly";
  frequencyDays?: number[];
}

// Habit Log
export interface HabitLog {
  id: number;
  habitId: number;
  completedAt: Date;
  goalProgress?: number;
  notes?: string;
}
