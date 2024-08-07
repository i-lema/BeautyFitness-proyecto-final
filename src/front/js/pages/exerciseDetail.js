import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';



export const ExerciseDetail = ({ location }) => {
    const { id } = useParams();
    const exercise = exercisesData[id];

    if (!exercise) {
        return <div>Exercise not found</div>;
    }

    const fullBody2 = {
        "Día 1": ["0025", "0099", "0652", "0314", "0043", "0188", "0032", "1457", "1383", "2741", "0241"],
        "Día 2": ["0841", "0054", "0180", "0043", "0025", "0027", "0085", "0587", "1774", "0313", "3697", "0194"]
    };
    
    const exercisesData = {
        "0025": {
            "bodyPart": "chest",
            "equipment": "barbell",
            "gifUrl": "https://v2.exercisedb.io/image/qm0tg2tnaXv490",
            "id": "0025",
            "name": "barbell bench press",
            "target": "pectorals",
            "secondaryMuscles": ["triceps", "shoulders"],
            "instructions": [
                "Lie flat on a bench with your feet flat on the ground and your back pressed against the bench.",
                "Grasp the barbell with an overhand grip slightly wider than shoulder-width apart.",
                "Lift the barbell off the rack and hold it directly above your chest with your arms fully extended.",
                "Lower the barbell slowly towards your chest, keeping your elbows tucked in.",
                "Pause for a moment when the barbell touches your chest.",
                "Push the barbell back up to the starting position by extending your arms.",
                "Repeat for the desired number of repetitions."
            ]
        },
        "0099":{
            "bodyPart": "upper legs",
            "equipment": "barbell",
            "gifUrl": "https://v2.exercisedb.io/image/AYatgnw5Scr743",
            "id": "0099",
            "name": "barbell single leg split squat",
            "target": "quads",
            "secondaryMuscles": [
                "glutes",
                "hamstrings",
                "calves"
            ],
            "instructions": [
                "Stand with your feet shoulder-width apart, holding a barbell across your upper back.",
                "Take a large step forward with one leg, keeping your torso upright.",
                "Lower your body by bending your front knee and hip, while keeping your back leg straight.",
                "Continue lowering until your front thigh is parallel to the ground.",
                "Pause for a moment, then push through your front heel to return to the starting position.",
                "Repeat for the desired number of repetitions, then switch legs."
            ]
        },
        "0652":{
            "bodyPart": "back",
            "equipment": "body weight",
            "gifUrl": "https://v2.exercisedb.io/image/mOHje8bmDbhdku",
            "id": "0652",
            "name": "pull-up",
            "target": "lats",
            "secondaryMuscles": [
                "biceps",
                "forearms"
            ],
            "instructions": [
                "Hang from a pull-up bar with your palms facing away from you and your arms fully extended.",
                "Engage your core and squeeze your shoulder blades together.",
                "Pull your body up towards the bar by bending your elbows and bringing your chest towards the bar.",
                "Pause at the top of the movement, then slowly lower your body back down to the starting position.",
                "Repeat for the desired number of repetitions."
            ]
        },
        "0314":{
            "bodyPart": "chest",
            "equipment": "dumbbell",
            "gifUrl": "https://v2.exercisedb.io/image/IGkw8oZNcvjnH1",
            "id": "0314",
            "name": "dumbbell incline bench press",
            "target": "pectorals",
            "secondaryMuscles": [
                "shoulders",
                "triceps"
            ],
            "instructions": [
                "Set up an incline bench at a 45-degree angle.",
                "Sit on the bench with your feet flat on the ground and your back pressed firmly against the bench.",
                "Hold a dumbbell in each hand, palms facing forward, and lift them to shoulder height.",
                "Slowly lower the dumbbells to the sides of your chest, keeping your elbows at a 90-degree angle.",
                "Push the dumbbells back up to the starting position, fully extending your arms.",
                "Repeat for the desired number of repetitions."
            ]
        },
        "0043":{
            "bodyPart": "upper legs",
            "equipment": "barbell",
            "gifUrl": "https://v2.exercisedb.io/image/tfrJqH0Q5PpCGC",
            "id": "0043",
            "name": "barbell full squat",
            "target": "glutes",
            "secondaryMuscles": [
                "quadriceps",
                "hamstrings",
                "calves",
                "core"
            ],
            "instructions": [
                "Stand with your feet shoulder-width apart, toes slightly turned out.",
                "Hold the barbell across your upper back, resting it on your traps or rear delts.",
                "Engage your core and keep your chest up as you begin to lower your body down.",
                "Bend at the knees and hips, pushing your hips back and down as if sitting into a chair.",
                "Lower yourself until your thighs are parallel to the ground or slightly below.",
                "Keep your knees in line with your toes and your weight in your heels.",
                "Drive through your heels to stand back up, extending your hips and knees.",
                "Repeat for the desired number of repetitions."
            ]
        },
        "0188":{
            "bodyPart": "chest",
            "equipment": "cable",
            "gifUrl": "https://v2.exercisedb.io/image/FfU94B5dojPbQf",
            "id": "0188",
            "name": "cable middle fly",
            "target": "pectorals",
            "secondaryMuscles": [
                "deltoids",
                "triceps"
            ],
            "instructions": [
                "Attach cables to both sides of a cable machine at chest height.",
                "Stand in the center of the machine with one foot slightly in front of the other.",
                "Grasp the handles with an overhand grip and extend your arms out to the sides.",
                "Keep a slight bend in your elbows and maintain a slight forward lean.",
                "Engage your chest muscles and bring your arms forward in a sweeping motion.",
                "Pause for a moment at the center, then slowly return your arms back to the starting position.",
                "Repeat for the desired number of repetitions."
            ]
        },
        "0032":{
            "bodyPart": "upper legs",
            "equipment": "barbell",
            "gifUrl": "https://v2.exercisedb.io/image/rxZNCCF4ZCFouE",
            "id": "0032",
            "name": "barbell deadlift",
            "target": "glutes",
            "secondaryMuscles": [
                "hamstrings",
                "lower back"
            ],
            "instructions": [
                "Stand with your feet shoulder-width apart and the barbell on the ground in front of you.",
                "Bend your knees and hinge at the hips to lower your torso and grip the barbell with an overhand grip, hands slightly wider than shoulder-width apart.",
                "Keep your back straight and chest lifted as you drive through your heels to lift the barbell off the ground, extending your hips and knees.",
                "As you stand up straight, squeeze your glutes and keep your core engaged.",
                "Lower the barbell back down to the ground by bending at the hips and knees, keeping your back straight.",
                "Repeat for the desired number of repetitions."
            ]
        },
        "1457":{
            "bodyPart": "shoulders",
            "equipment": "barbell",
            "gifUrl": "https://v2.exercisedb.io/image/Y-rM7Zt68Crk4C",
            "id": "1457",
            "name": "barbell standing wide military press",
            "target": "delts",
            "secondaryMuscles": [
                "triceps",
                "upper back"
            ],
            "instructions": [
                "Stand with your feet shoulder-width apart and hold the barbell with an overhand grip, slightly wider than shoulder-width.",
                "Lift the barbell to shoulder height, keeping your elbows slightly in front of the bar.",
                "Press the barbell overhead, extending your arms fully.",
                "Lower the barbell back to shoulder height and repeat for the desired number of repetitions."
            ]
        },
        "1383":{
            "bodyPart": "lower legs",
            "equipment": "sled machine",
            "gifUrl": "https://v2.exercisedb.io/image/9pOermiP-9YBdh",
            "id": "1383",
            "name": "hack calf raise",
            "target": "calves",
            "secondaryMuscles": [
                "hamstrings",
                "glutes"
            ],
            "instructions": [
                "Adjust the sled machine to a comfortable weight.",
                "Stand on the sled machine with your toes on the platform and your heels hanging off.",
                "Hold onto the handles for stability.",
                "Raise your heels as high as possible by pushing through the balls of your feet.",
                "Pause for a moment at the top, then slowly lower your heels back down to the starting position.",
                "Repeat for the desired number of repetitions."
            ]
        },
        "2741":{
            "bodyPart": "upper arms",
            "equipment": "ez barbell",
            "gifUrl": "https://v2.exercisedb.io/image/Y7c6v5Cru46Lsk",
            "id": "2741",
            "name": "ez-barbell standing wide grip biceps curl",
            "target": "biceps",
            "secondaryMuscles": [
                "forearms"
            ],
            "instructions": [
                "Stand up straight with your feet shoulder-width apart and hold the ez barbell with an underhand grip, hands wider than shoulder-width apart.",
                "Keep your elbows close to your torso and your upper arms stationary throughout the movement.",
                "Curl the barbell up towards your shoulders by contracting your biceps.",
                "Pause for a moment at the top, then slowly lower the barbell back to the starting position.",
                "Repeat for the desired number of repetitions."
            ]
        },
        "0241":{
            "bodyPart": "upper arms",
            "equipment": "cable",
            "gifUrl": "https://v2.exercisedb.io/image/qxIqwp5tDoZf4m",
            "id": "0241",
            "name": "cable triceps pushdown (v-bar)",
            "target": "triceps",
            "secondaryMuscles": [
                "forearms"
            ],
            "instructions": [
                "Attach a v-bar attachment to the cable machine at the highest setting.",
                "Stand facing the cable machine with your feet shoulder-width apart.",
                "Grasp the v-bar with an overhand grip, palms facing down, and your hands shoulder-width apart.",
                "Keep your elbows close to your sides and your upper arms stationary throughout the exercise.",
                "Engage your triceps and exhale as you push the v-bar down until your arms are fully extended.",
                "Pause for a moment at the bottom of the movement, squeezing your triceps.",
                "Inhale as you slowly return the v-bar to the starting position, maintaining control.",
                "Repeat for the desired number of repetitions."
            ]
        },
        "0841":{
            "bodyPart": "back",
            "equipment": "weighted",
            "gifUrl": "https://v2.exercisedb.io/image/yf04GamVoQvi7N",
            "id": "0841",
            "name": "weighted pull-up",
            "target": "lats",
            "secondaryMuscles": [
                "biceps",
                "forearms"
            ],
            "instructions": [
                "Grab the pull-up bar with an overhand grip, slightly wider than shoulder-width apart.",
                "Hang from the bar with your arms fully extended and your body straight.",
                "Engage your back muscles and pull your body up towards the bar, keeping your elbows close to your body.",
                "Continue pulling until your chin is above the bar.",
                "Pause for a moment at the top, then slowly lower your body back down to the starting position.",
                "Repeat for the desired number of repetitions."
            ]
        },
        "0054":{
            "bodyPart": "upper legs",
            "equipment": "barbell",
            "gifUrl": "https://v2.exercisedb.io/image/yzczCTvebycZ62",
            "id": "0054",
            "name": "barbell lunge",
            "target": "glutes",
            "secondaryMuscles": [
                "quadriceps",
                "hamstrings",
                "calves"
            ],
            "instructions": [
                "Start by standing with your feet shoulder-width apart and a barbell resting on your upper back.",
                "Take a step forward with your right foot, keeping your torso upright.",
                "Lower your body by bending your right knee until your thigh is parallel to the ground.",
                "Push through your right heel to return to the starting position.",
                "Repeat with your left leg, alternating legs for the desired number of repetitions."
            ]
        },
        "0180":{
            "bodyPart": "back",
            "equipment": "cable",
            "gifUrl": "https://v2.exercisedb.io/image/hOGh2T6Rhbw0-P",
            "id": "0180",
            "name": "cable low seated row",
            "target": "upper back",
            "secondaryMuscles": [
                "biceps",
                "forearms"
            ],
            "instructions": [
                "Sit on the machine with your feet flat on the footrests and your knees slightly bent.",
                "Grasp the handles with an overhand grip, palms facing down.",
                "Keep your back straight and lean slightly forward, maintaining a slight bend in your elbows.",
                "Pull the handles towards your body, squeezing your shoulder blades together.",
                "Pause for a moment at the peak of the movement, then slowly release the handles back to the starting position.",
                "Repeat for the desired number of repetitions."
            ]
        },
        "0043":{
            "bodyPart": "upper legs",
            "equipment": "barbell",
            "gifUrl": "https://v2.exercisedb.io/image/tfrJqH0Q5PpCGC",
            "id": "0043",
            "name": "barbell full squat",
            "target": "glutes",
            "secondaryMuscles": [
                "quadriceps",
                "hamstrings",
                "calves",
                "core"
            ],
            "instructions": [
                "Stand with your feet shoulder-width apart, toes slightly turned out.",
                "Hold the barbell across your upper back, resting it on your traps or rear delts.",
                "Engage your core and keep your chest up as you begin to lower your body down.",
                "Bend at the knees and hips, pushing your hips back and down as if sitting into a chair.",
                "Lower yourself until your thighs are parallel to the ground or slightly below.",
                "Keep your knees in line with your toes and your weight in your heels.",
                "Drive through your heels to stand back up, extending your hips and knees.",
                "Repeat for the desired number of repetitions."
            ]
        },
        "0025":{
            "bodyPart": "chest",
            "equipment": "barbell",
            "gifUrl": "https://v2.exercisedb.io/image/qm0tg2tnaXv490",
            "id": "0025",
            "name": "barbell bench press",
            "target": "pectorals",
            "secondaryMuscles": [
                "triceps",
                "shoulders"
            ],
            "instructions": [
                "Lie flat on a bench with your feet flat on the ground and your back pressed against the bench.",
                "Grasp the barbell with an overhand grip slightly wider than shoulder-width apart.",
                "Lift the barbell off the rack and hold it directly above your chest with your arms fully extended.",
                "Lower the barbell slowly towards your chest, keeping your elbows tucked in.",
                "Pause for a moment when the barbell touches your chest.",
                "Push the barbell back up to the starting position by extending your arms.",
                "Repeat for the desired number of repetitions."
            ]
        },
        "0027":{
            "bodyPart": "back",
            "equipment": "barbell",
            "gifUrl": "https://v2.exercisedb.io/image/0zCtxTYh6VbSQZ",
            "id": "0027",
            "name": "barbell bent over row",
            "target": "upper back",
            "secondaryMuscles": [
                "biceps",
                "forearms"
            ],
            "instructions": [
                "Stand with your feet shoulder-width apart and knees slightly bent.",
                "Bend forward at the hips while keeping your back straight and chest up.",
                "Grasp the barbell with an overhand grip, hands slightly wider than shoulder-width apart.",
                "Pull the barbell towards your lower chest by retracting your shoulder blades and squeezing your back muscles.",
                "Pause for a moment at the top, then slowly lower the barbell back to the starting position.",
                "Repeat for the desired number of repetitions."
            ]
        },
        "0085":{
            "bodyPart": "upper legs",
            "equipment": "barbell",
            "gifUrl": "https://v2.exercisedb.io/image/ZEjMnGRMQ0TQgb",
            "id": "0085",
            "name": "barbell romanian deadlift",
            "target": "glutes",
            "secondaryMuscles": [
                "hamstrings",
                "lower back"
            ],
            "instructions": [
                "Stand with your feet shoulder-width apart and your toes pointing forward.",
                "Hold the barbell with an overhand grip, hands slightly wider than shoulder-width apart.",
                "Bend at the hips, keeping your back straight and your knees slightly bent.",
                "Lower the barbell towards the ground, keeping it close to your body.",
                "Feel the stretch in your hamstrings as you lower the barbell.",
                "Once you feel a stretch in your hamstrings, push your hips forward and stand up straight.",
                "Squeeze your glutes at the top of the movement.",
                "Lower the barbell back down to the starting position and repeat for the desired number of repetitions."
            ]
        },
        "0587":{
            "bodyPart": "shoulders",
            "equipment": "leverage machine",
            "gifUrl": "https://v2.exercisedb.io/image/npR8OYxz3jcGtH",
            "id": "0587",
            "name": "lever military press",
            "target": "delts",
            "secondaryMuscles": [
                "triceps",
                "upper chest"
            ],
            "instructions": [
                "Adjust the seat height and position yourself on the machine with your back against the backrest.",
                "Grasp the handles with an overhand grip and position your hands slightly wider than shoulder-width apart.",
                "Push the handles upward until your arms are fully extended, but do not lock your elbows.",
                "Pause for a moment at the top, then slowly lower the handles back down to the starting position.",
                "Repeat for the desired number of repetitions."
            ]
        },
        "1774":{
            "bodyPart": "upper legs",
            "equipment": "body weight",
            "gifUrl": "https://v2.exercisedb.io/image/hu6awePluwJoaf",
            "id": "1774",
            "name": "side bridge hip abduction",
            "target": "abductors",
            "secondaryMuscles": [
                "glutes",
                "obliques"
            ],
            "instructions": [
                "Lie on your side with your legs extended and stacked on top of each other.",
                "Prop yourself up on your forearm, keeping your elbow directly below your shoulder.",
                "Engage your core and lift your hips off the ground, creating a straight line from your head to your feet.",
                "While keeping your core engaged, lift your top leg as high as possible without rotating your hips.",
                "Pause for a moment at the top, then lower your leg back down.",
                "Repeat for the desired number of repetitions, then switch sides."
            ]
        },
        "0313":{
            "bodyPart": "upper arms",
            "equipment": "dumbbell",
            "gifUrl": "https://v2.exercisedb.io/image/KphlSZ-ZkmE7MU",
            "id": "0313",
            "name": "dumbbell hammer curl",
            "target": "biceps",
            "secondaryMuscles": [
                "forearms"
            ],
            "instructions": [
                "Stand up straight with a dumbbell in each hand, palms facing your torso.",
                "Keep your elbows close to your torso and rotate the palms of your hands until they are facing forward.",
                "This will be your starting position.",
                "Now, keeping the upper arms stationary, exhale and curl the weights while contracting your biceps.",
                "Continue to raise the weights until your biceps are fully contracted and the dumbbells are at shoulder level.",
                "Hold the contracted position for a brief pause as you squeeze your biceps.",
                "Then, inhale and slowly begin to lower the dumbbells back to the starting position.",
                "Repeat for the recommended amount of repetitions."
            ]
        },
        "3697":{
            "bodyPart": "shoulders",
            "equipment": "cable",
            "gifUrl": "https://v2.exercisedb.io/image/H1OdhwVPDSex16",
            "id": "3697",
            "name": "cable kneeling rear delt row (with rope) (male)",
            "target": "delts",
            "secondaryMuscles": [
                "trapezius",
                "rhomboids",
                "biceps"
            ],
            "instructions": [
                "Attach a rope handle to a low cable pulley and kneel down facing the machine.",
                "Grasp the rope with a neutral grip (palms facing each other) and extend your arms fully in front of you.",
                "Keeping your back straight and core engaged, pull the rope towards your body by retracting your shoulder blades.",
                "Squeeze your shoulder blades together at the end of the movement and hold for a brief pause.",
                "Slowly release the tension and return to the starting position.",
                "Repeat for the desired number of repetitions."
            ]
        },
        "0194":{
            "bodyPart": "upper arms",
            "equipment": "cable",
            "gifUrl": "https://v2.exercisedb.io/image/ergTYoe-RKYrXX",
            "id": "0194",
            "name": "cable overhead triceps extension (rope attachment)",
            "target": "triceps",
            "secondaryMuscles": [
                "shoulders"
            ],
            "instructions": [
                "Attach a rope to a cable machine at a high position.",
                "Stand facing away from the machine with your feet shoulder-width apart.",
                "Grasp the rope with both hands, palms facing each other, and bring your hands above your head.",
                "Keep your upper arms close to your head and your elbows pointing forward.",
                "Slowly lower the rope behind your head by bending your elbows.",
                "Pause for a moment, then extend your arms back up to the starting position.",
                "Repeat for the desired number of repetitions."
            ]
        }
    
    };

    return (
        <div className="exercise-detail">
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