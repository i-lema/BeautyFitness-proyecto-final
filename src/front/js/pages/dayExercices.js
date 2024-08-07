import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { routines } from './routines'; // Importar las rutinas desde un archivo

const Day = () => {
  const { routineId, dayId } = useParams();
  const navigate = useNavigate();
  const day = routines[routineId].days.find(day => day.id === dayId);

  const handleSelectExercise = (exerciseId) => {
    navigate(`/routine/${routineId}/day/${dayId}/exercise/${exerciseId}`);
  }

  return (
    <div>
      <h1>Día {dayId}</h1>
      {day.exercises.map((exercise, index) => (
        <button key={index} onClick={() => handleSelectExercise(exercise.id)}>{exercise.name}</button>
      ))}
    </div>
  );
}

export default Day;
