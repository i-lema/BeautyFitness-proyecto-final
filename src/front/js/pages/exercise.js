import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from "../store/appContext";

export const Exercise = () => {
    const { id } = useParams(); // Obtener el ID del ejercicio desde la URL
    const { store, actions } = useContext(Context);
    const [exercise, setExercise] = useState(null);

    useEffect(() => {
        // Función para obtener la información del ejercicio
        const fetchExercise = async () => {
            const fetchedExercise = await actions.fetchExerciseById(id);
            setExercise(fetchedExercise);
        };

        fetchExercise();
    }, [id, actions]);

    if (!exercise) return <p>Loading...</p>; // Mostrar un mensaje mientras se carga la información

    return (
        <div>
            <h1>{exercise.name}</h1>
            <img src={exercise.gifUrl} alt={exercise.name} />
            <h2>Details</h2>
            <p><strong>Body Part:</strong> {exercise.bodyPart}</p>
            <p><strong>Equipment:</strong> {exercise.equipment}</p>
            <p><strong>Target:</strong> {exercise.target}</p>
            <p><strong>Secondary Muscles:</strong> {exercise.secondaryMuscles.join(', ')}</p>
            <h3>Instructions</h3>
            <ol>
                {exercise.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                ))}
            </ol>
        </div>
    );
};