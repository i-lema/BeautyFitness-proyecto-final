import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { routines } from './routines'; // Importar las rutinas desde un archivo

const Routine = () => {
  const { routineId } = useParams();
  const navigate = useNavigate();
  const routine = routines[routineId];

  const handleSelectDay = (day) => {
    navigate(`/routine/${routineId}/day/${day}`);
  }

  return (
    <div>
      <h1>{routine.name}</h1>
      {routine.days.map((day, index) => (
        <button key={index} onClick={() => handleSelectDay(day.id)}>Día {index + 1}</button>
      ))}
    </div>
  );
}

export default Routine;
