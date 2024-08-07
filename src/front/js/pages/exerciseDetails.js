import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ExerciseDetails = () => {
    const { exerciseId } = useParams();
    const [exercise, setExercise] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchExerciseData = async () => {
            const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${exerciseId}`;
            const headers = {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "X-RapidAPI-Key": "453ba30c6cmsh6b25ac11c3ebdc4p1cec91jsn633f42181161",
                "X-RapidAPI-Host": "exercisedb.p.rapidapi.com"
            };
    
            try {
                const response = await fetch(url, { method: "GET", headers });
                if (!response.ok) throw new Error("Error fetching exercise data");
    
                const data = await response.json();
                setExercise(data);
            } catch (error) {
                console.error('Error fetching exercise data:', error);
            } finally {
                setLoading(false);
            }
        };
    
        fetchExerciseData();
    }, [exerciseId]);
    

    if (loading) return <p>Loading...</p>;
    if (!exercise) return <p>No exercise found.</p>;

    return (
        <div className="exercise-details">
            <h1>{exercise.name}</h1>
            <img src={exercise.gifUrl} alt={exercise.name} />
            <p><strong>Body Part:</strong> {exercise.bodyPart}</p>
            <p><strong>Equipment:</strong> {exercise.equipment}</p>
            <p><strong>Target:</strong> {exercise.target}</p>
            <p><strong>Secondary Muscles:</strong> {exercise.secondaryMuscles.join(', ')}</p>
            <ol>
                {exercise.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                ))}
            </ol>
        </div>
    );
};

export default ExerciseDetails;
