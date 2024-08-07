// import React, { useEffect, useContext } from "react";
// import { useParams } from "react-router-dom";
// import { Context } from "../store/appContext";

// const RoutineDisplay = () => {
//     const { store, actions } = useContext(Context);
//     const { routineName } = useParams();

//     useEffect(() => {
//         switch (routineName) {
//             case "weider":
//                 actions.getWeiderRoutine();
//                 break;
//             case "fullBody":
//                 actions.getFullBodyRoutine();
//                 break;
//             case "pushPull":
//                 actions.getPushPullRoutine();
//                 break;
//             case "torsoLeg":
//                 actions.getTorsoLegRoutine();
//                 break;
//             default:
//                 break;
//         }
//     }, [routineName]);

//     const renderExercises = (exercises) => {
//         return exercises.map(exercise => (
//             <li key={exercise.id}>
//                 <h4>{exercise.name}</h4>
//                 <p><strong>Body Part:</strong> {exercise.bodyPart}</p>
//                 <p><strong>Equipment:</strong> {exercise.equipment}</p>
//                 <p><strong>Target Muscle:</strong> {exercise.target}</p>
//                 <p><strong>Secondary Muscles:</strong> {exercise.secondaryMuscles.join(', ')}</p>
//                 <p><strong>Instructions:</strong></p>
//                 <ul>
//                     {exercise.instructions.map((instruction, index) => (
//                         <li key={index}>{instruction}</li>
//                     ))}
//                 </ul>
//                 <img src={exercise.gifUrl} alt={exercise.name} />
//             </li>
//         ));
//     };

//     const renderRoutine = () => {
//         if (!store.routineExercises) return <p>Loading...</p>;

//         return Object.keys(store.routineExercises).map(day => (
//             <div key={day}>
//                 <h3>{day}</h3>
//                 <ul>
//                     {renderExercises(store.routineExercises[day])}
//                 </ul>
//             </div>
//         ));
//     };

//     return (
//         <div>
//             <h2>{routineName}</h2>
//             {renderRoutine()}
//         </div>
//     );
// };

// export default RoutineDisplay;



import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const RoutineDisplay = ({ getRoutine }) => {
    const [routineData, setRoutineData] = useState({});

    useEffect(() => {
        // Llamar a la función para obtener la rutina cuando el componente se monte
        const fetchRoutine = async () => {
            try {
                await getRoutine();
                const store = getStore(); // Asegúrate de que esta función esté disponible
                setRoutineData(store.routineExercises);
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Error fetching routine data.',
                });
                console.error(error);
            }
        };

        fetchRoutine();
    }, [getRoutine]);

    const renderExercises = (exercises) => {
        return exercises.map(exercise => (
            <div key={exercise.id} className="exercise">
                <h4>{exercise.name}</h4>
                <img src={exercise.gifUrl} alt={exercise.name} />
                <p><strong>Body Part:</strong> {exercise.bodyPart}</p>
                <p><strong>Target:</strong> {exercise.target}</p>
                <p><strong>Equipment:</strong> {exercise.equipment}</p>
                <p><strong>Secondary Muscles:</strong> {exercise.secondaryMuscles.join(', ')}</p>
                <ul>
                    <strong>Instructions:</strong>
                    {exercise.instructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                    ))}
                </ul>
            </div>
        ));
    };

    return (
        <div className="routine-display">
            {Object.keys(routineData).map(day => (
                <div key={day} className="day-section">
                    <h3>{day}</h3>
                    {routineData[day] && renderExercises(routineData[day])}
                </div>
            ))}
        </div>
    );
};

export default RoutineDisplay;
