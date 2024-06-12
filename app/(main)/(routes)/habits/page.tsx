import React from 'react';
import CreateHabit from '../../_components/CreateHabit';
import HabitsList from '../../_components/HabitsList';

const HabitsPage: React.FC = () => {
  return (
    <div>
      <h1>Habits Manager</h1>
      <CreateHabit />
      <HabitsList />
    </div>
  );
};

export default HabitsPage;
