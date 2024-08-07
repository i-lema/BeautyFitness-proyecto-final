// import React from "react";
// import "../../styles/routine.css";
// const Routine= () => {
//   return (
//     <div>
     
//       <main className="routine-container">
//         <h1 className="mt-5">Routine</h1>
       
//         <div className="button-container">
//         <button type="button" class="btn btn-secondary">Create routine</button>
//         <button type="button" class="btn btn-secondary">Sugest routine</button>
//         <button type="button" class="btn btn-secondary">Change routine</button>
//         <button type="button" class="btn btn-secondary">Select routine</button>
//         <button type="button" class="btn btn-success mt-20 p-10">Continue</button>
//         </div>
//       </main>
    
//     </div>
//   );
// };

// export default Routine;



import React from 'react';
import { useNavigate } from 'react-router-dom';

const Routine = () => {
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

export default Routine;
