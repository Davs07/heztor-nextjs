"use client";

import React, { useState } from "react";
import useHabitsStore from "@/api/stores/habitStore";

const CreateHabit: React.FC = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const createHabit = useHabitsStore((state) => state.createHabit);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createHabit({ name, description, userId: "ID_DEL_USUARIO" });
    setName("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Create Habit</button>
    </form>
  );
};

export default CreateHabit;
