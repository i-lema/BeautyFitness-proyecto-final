// Importar React y hooks necesarios
import React from 'react';
import { useParams } from 'react-router-dom';
import { exercises } from '../component/exercices.js'; // Importar los ejercicios desde un archivo

const Exercise = () => {
    // Obtener el parámetro de la URL usando useParams
    const { exerciseId } = useParams();
    
    // Buscar el ejercicio correspondiente basado en el parámetro de la URL
    const exercise = exercises.find(ex => ex.id === exerciseId);
    
    // Verificar si el ejercicio existe y renderizar el contenido
    return (
        <div>
            {exercise ? (
                <>
                    <h1>{exercise.name}</h1>
                    <p>{exercise.description}</p>
                    <p>Repeticiones: {exercise.reps}</p>
                    <p>Series: {exercise.sets}</p>
                </>
            ) : (
                <p>Ejercicio no encontrado.</p>
            )}
        </div>
    );
};

export default Exercise;
