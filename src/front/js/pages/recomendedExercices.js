import React, { useContext } from "react";
import { Context } from "../store/appContext";

const RecommendedExercises = () => {
    const { store } = useContext(Context);

    return (
        <div className="text-center my-5">
            <h2>Ejercicios Recomendados</h2>
            {store.recommendedExercises.length > 0 ? (
                <ul className="list-group">
                    {store.recommendedExercises.map((exercise, index) => (
                        <li key={index} className="list-group-item">
                            <img src={exercise.gifUrl} alt={exercise.name} className="exercise-image"/>
                            <h5>{exercise.name}</h5>
                            <p>{exercise.bodyPart}</p>
                            <p>{exercise.equipment}</p>
                            <p>{exercise.target}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No hay ejercicios recomendados en este momento.</p>
            )}
        </div>
    );
};

export default RecommendedExercises;
