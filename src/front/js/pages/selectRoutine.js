import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  
  const handleSelectRoutine = (routine) => {
    navigate(`/routine/${routine}`);
  }

  return (
    <div>
      <h1>Selecciona una Rutina</h1>
      <button onClick={() => handleSelectRoutine('weider')}>Weider</button>
      <button onClick={() => handleSelectRoutine('fullbody')}>Full-Body</button>
      <button onClick={() => handleSelectRoutine('pushpull')}>Push/Pull</button>
      <button onClick={() => handleSelectRoutine('torsopierna')}>Torso/Pierna</button>
    </div>
  );
}

export default Home;
