// import React from "react";
// import "../../styles/trainingDays.css";
// const TrainingDays = () => {
//   return (
//      <div>
        
//         <main className="trainingDays-container" >
//           <h1 className="mt-5">Training days</h1>
//             <h3>How many days of training?</h3>
//             <div className="button-container">
//         <button type="button" class="btn btn-secondary">1</button>
//         <button type="button" class="btn btn-secondary">2</button>
//         <button type="button" class="btn btn-secondary">3</button>
//         <button type="button" class="btn btn-secondary">4</button>
//         <button type="button" class="btn btn-secondary">5</button>
//         <button type="button" class="btn btn-secondary">6</button>
//         <button type="button" class="btn btn-secondary">7</button>
//         </div>
//             <h3>Choose training day</h3>
//             <div className="button-container">
//         <button type="button" class="btn btn-secondary">Monday</button>
//         <button type="button" class="btn btn-secondary">Tuesday</button>
//         <button type="button" class="btn btn-secondary">Wensday</button>
//         <button type="button" class="btn btn-secondary">Thursday</button>
//         <button type="button" class="btn btn-secondary">Friday</button>
//         <button type="button" class="btn btn-secondary">Saturday</button>
//         <button type="button" class="btn btn-secondary">Sunday</button>
//         </div> 
//            <h3>Type training</h3>
//            <div className="button-container">
//         <button type="button" class="btn btn-secondary">Fullbody</button>
//         <button type="button" class="btn btn-secondary">Legs</button>
//         <button type="button" class="btn btn-secondary">Push-Pull</button>
//         <button type="button" class="btn btn-secondary">Weider</button>
        
//         </div> 

//               <button type="button" class="btn btn-success">Continue</button>
       
//       </main>
     
//     </div>
//   );
// };

// export default TrainingDays;

import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

const TrainingDays = () => {
    const { actions } = useContext(Context);
    const [days, setDays] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        actions.setTrainingDays(days);
    };

    return (
        <div className="text-center my-5">
            <form className="my-5 d-flex flex-column justify-content-center align-items-center bg-dark text-light" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="days" className="form-label">Número de días de entrenamiento por semana</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="days" 
                        value={days} 
                        onChange={(e) => setDays(parseInt(e.target.value, 10))} 
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default TrainingDays;
