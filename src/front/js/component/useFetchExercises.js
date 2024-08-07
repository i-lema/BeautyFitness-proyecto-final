import { useEffect, useState } from 'react';

const useFetchExercises = (ids) => {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const fetchedExercises = [];
        for (const id of ids) {
          const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`;
          const headers = {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "X-RapidAPI-Key": "453ba30c6cmsh6b25ac11c3ebdc4p1cec91jsn633f42181161",
            "X-RapidAPI-Host": "exercisedb.p.rapidapi.com"
          };

          const response = await fetch(url, { method: "GET", headers });
          if (!response.ok) throw new Error("Error fetching exercise");

          const exercise = await response.json();
          fetchedExercises.push({
            id: exercise.id,
            name: exercise.name,
            bodyPart: exercise.bodyPart,
            equipment: exercise.equipment,
            gifUrl: exercise.gifUrl,
            target: exercise.target,
            secondaryMuscles: exercise.secondaryMuscles || [],
            instructions: exercise.instructions || []
          });
        }
        setExercises(fetchedExercises);
        localStorage.setItem('exercises', JSON.stringify(fetchedExercises));
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchExercises();
  }, [ids]);

  return { exercises, loading, error };
};

export default useFetchExercises;
