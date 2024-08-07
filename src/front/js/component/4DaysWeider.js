import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const WeiderRoutine = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const navigate = useNavigate();
    // const weiderRoutine = {
    //     "Día 1": ["0025", "0047", "0314", "0179", "0188", "1269", "0285", "0315", "2741", "0313", "0757", "1326"],
    //     "Día 2": ["3418", "0652", "0841", "0027", "0180", "0193", "1319", "0861", "2616", "0327", "0061", "0194", "0591", "1767", "0814", "0241"],
    //     "Día 3": ["0032", "0085", "0300", "1459", "1757", "0054", "0078", "0114", "0058", "0099", "0410", "0597", "1774", "1417", "0586", "3195", "0599", "0696", "0043", "1436", "0068", "1476", "0743", "1383", "0605", "0739"],
    //     "Día 4": ["3697", "0178", "0192", "1457", "0553", "0587", "2137", "0310", "0326", "0334", "0405", "0426"]
    // };

    const weiderRoutine = {
        "Día 1": ["0025", "0047", "0314", "0179", "0188", "1269", "0285", "0315", "2741", "0313", "0757", "1326"],
        "Día 2": ["3418", "0652", "0841", "0027", "0180", "0193", "1319"],
        "Día 3": ["0032", "0085", "0054", "0058", "0099", "1774", "0043", "1383"],
        "Día 4": ["3697", "1457", "0587"]
    };
    
    const exercisesData = {
        "1319":{
            "bodyPart": "back",
            "equipment": "cable",
            "gifUrl": "https://v2.exercisedb.io/image/aPfoDoWQIbaNfb",
            "id": "1319",
            "name": "cable palm rotational row",
            "target": "upper back",
            "secondaryMuscles": [
                "biceps",
                "forearms"
            ],
            "instructions": [
                "Attach a handle to a cable machine at waist height.",
                "Stand facing the machine with your feet shoulder-width apart.",
                "Grasp the handle with an overhand grip, palms facing down.",
                "Step back to create tension on the cable, keeping your back straight and knees slightly bent.",
                "Pull the handle towards your body, rotating your palms to face upwards as you do so.",
                "Squeeze your shoulder blades together at the end of the movement.",
                "Slowly release the handle back to the starting position.",
                "Repeat for the desired number of repetitions."
            ]
        },
        "0193":{
            "bodyPart": "back",
            "equipment": "cable",
            "gifUrl": "https://v2.exercisedb.io/image/YhuWrIPzpiYuga",
            "id": "0193",
            "name": "cable one arm straight back high row (kneeling)",
            "target": "upper back",
            "secondaryMuscles": [
                "biceps",
                "shoulders"
            ],
            "instructions": [
                "Attach a handle to a cable machine at waist height.",
                "Kneel down facing the cable machine and grab the handle with one hand.",
                "Keep your back straight and your core engaged.",
                "Pull the handle towards your chest, squeezing your shoulder blades together.",
                "Pause for a moment at the top of the movement.",
                "Slowly release the handle back to the starting position.",
                "Repeat for the desired number of repetitions.",
                "Switch sides and repeat the exercise with the other arm."
            ]
        },
        "3418":{
            "bodyPart": "back",
            "equipment": "body weight",
            "gifUrl": "https://v2.exercisedb.io/image/gJS-vGcebQOK53",
            "id": "3418",
            "name": "l-pull-up",
            "target": "lats",
            "secondaryMuscles": [
                "biceps",
                "forearms"
            ],
            "instructions": [
                "Grab the pull-up bar with an overhand grip, slightly wider than shoulder-width apart.",
                "Hang with your arms fully extended and your body straight.",
                "Engage your lats and biceps to pull your body up towards the bar, keeping your elbows close to your body.",
                "Continue pulling until your chin is above the bar.",
                "Pause for a moment at the top, then slowly lower your body back down to the starting position.",
                "Repeat for the desired number of repetitions."
            ]
        },
        "1326":{
            "bodyPart": "back",
            "equipment": "body weight",
            "gifUrl": "https://v2.exercisedb.io/image/DK66WdHKL5wLho",
            "id": "1326",
            "name": "chin-up",
            "target": "lats",
            "secondaryMuscles": [
                "biceps",
                "forearms"
            ],
            "instructions": [
                "Hang from a pull-up bar with your palms facing towards you and your hands shoulder-width apart.",
                "Engage your core and pull your body up towards the bar, leading with your chest.",
                "Continue pulling until your chin is above the bar.",
                "Pause for a moment at the top, then slowly lower your body back down to the starting position.",
                "Repeat for the desired number of repetitions."
            ]
        },
        "0757":{
            "bodyPart": "chest",
            "equipment": "smith machine",
            "gifUrl": "https://v2.exercisedb.io/image/gcbwL6xb66rUSm",
            "id": "0757",
            "name": "smith incline bench press",
            "target": "pectorals",
            "secondaryMuscles": [
                "shoulders",
                "triceps"
            ],
            "instructions": [
                "Adjust the bench to a 30-45 degree incline.",
                "Sit on the bench with your back flat against the pad and feet firmly on the ground.",
                "Grasp the barbell with an overhand grip slightly wider than shoulder-width apart.",
                "Unrack the barbell and lower it slowly towards your upper chest, keeping your elbows slightly tucked in.",
                "Pause for a moment at the bottom, then push the barbell back up to the starting position, fully extending your arms.",
                "Repeat for the desired number of repetitions."
            ]
        },
        "0315":{
            "bodyPart": "upper arms",
            "equipment": "dumbbell",
            "gifUrl": "https://v2.exercisedb.io/image/KldnAbIDu6sNRz",
            "id": "0315",
            "name": "dumbbell incline biceps curl",
            "target": "biceps",
            "secondaryMuscles": [
                "forearms"
            ],
            "instructions": [
                "Sit on an incline bench with a dumbbell in each hand, palms facing forward, and arms fully extended.",
                "Keeping your upper arms stationary, exhale and curl the weights while contracting your biceps.",
                "Continue to raise the dumbbells until your biceps are fully contracted and the dumbbells are at shoulder level.",
                "Hold the contracted position for a brief pause as you squeeze your biceps.",
                "Inhale and slowly begin to lower the dumbbells back to the starting position.",
                "Repeat for the desired number of repetitions."
            ]
        },
        "0285":{
            "bodyPart": "upper arms",
            "equipment": "dumbbell",
            "gifUrl": "https://v2.exercisedb.io/image/DEsAWr0DKgz50E",
            "id": "0285",
            "name": "dumbbell alternate biceps curl",
            "target": "biceps",
            "secondaryMuscles": [
                "forearms"
            ],
            "instructions": [
                "Stand up straight with a dumbbell in each hand, palms facing forward and arms fully extended.",
                "Keeping your upper arms stationary, exhale and curl the weights while contracting your biceps.",
                "Continue to raise the dumbbells until your biceps are fully contracted and the dumbbells are at shoulder level.",
                "Hold the contracted position for a brief pause as you squeeze your biceps.",
                "Inhale and slowly begin to lower the dumbbells back to the starting position.",
                "Repeat for the desired number of repetitions, alternating arms."
            ]
        },
        "1269":{
            "bodyPart": "chest",
            "equipment": "cable",
            "gifUrl": "https://v2.exercisedb.io/image/Ctr0w2EOcfpP29",
            "id": "1269",
            "name": "cable standing up straight crossovers",
            "target": "pectorals",
            "secondaryMuscles": [
                "deltoids",
                "triceps"
            ],
            "instructions": [
                "Stand in the middle of a cable machine with your feet shoulder-width apart.",
                "Hold the handles of the cables with your palms facing down and your arms extended straight out to the sides.",
                "Keeping your arms straight, bring your hands together in front of your body, crossing them over each other.",
                "Pause for a moment, then slowly return to the starting position, keeping your arms extended.",
                "Repeat for the desired number of repetitions."
            ]
        },
        "0179":{
            "bodyPart": "chest",
            "equipment": "cable",
            "gifUrl": "https://v2.exercisedb.io/image/VzwUszNEMMTt6L",
            "id": "0179",
            "name": "cable low fly",
            "target": "pectorals",
            "secondaryMuscles": [
                "deltoids",
                "triceps"
            ],
            "instructions": [
                "Attach the handles to the low pulleys of a cable machine and select an appropriate weight.",
                "Stand in the middle of the machine with your feet shoulder-width apart and a slight bend in your knees.",
                "Grasp the handles with an overhand grip and extend your arms out to the sides, keeping a slight bend in your elbows.",
                "Maintaining control, slowly bring your arms forward in a sweeping motion, crossing them in front of your body.",
                "Pause for a moment at the peak of the movement, feeling the stretch in your chest muscles.",
                "Reverse the motion and slowly return your arms to the starting position, keeping tension on your chest muscles throughout.",
                "Repeat for the desired number of repetitions."
            ]
        },
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
//     const TrainingDays = ({ weiderRoutine }) => (
//         <div className="training-days">
//             {Object.keys(weiderRoutine).map(day => (
//                 <div key={day} className="training-day">
//                     <h1>{day}</h1>
//                     <div className="exercises">
//                         {weiderRoutine[day].map(exerciseId => (
//                             <Link to={`/exercise/${exerciseId}`} key={exerciseId}>
//                                 <div className="exercise-summary-card">
//                                     <h3>{exercisesData[exerciseId].name}</h3>
//                                     <img src={exercisesData[exerciseId].gifUrl} alt={exercisesData[exerciseId].name} />
//                                 </div>
//                             </Link>
//                         ))}
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );

//     return (
//         <div>
//             <TrainingDays weiderRoutine={weiderRoutine} />
//         </div>
//     );
// }

const TrainingDays = ({ weiderRoutine }) => (
    <div className="training-days">
        {Object.keys(weiderRoutine).map(day => (
            <div key={day} className="training-day">
                <h1>{day}</h1>
                <div className="exercises">
                    {weiderRoutine[day].map(exerciseId => {
                        const exercise = exercisesData[exerciseId];
                        if (!exercise) {
                            return (
                                <div key={exerciseId} className="exercise-summary-card">
                                    <h3>Exercise not found</h3>
                                </div>
                            );
                        }
                        return (
                            <Link to={`/exercise/${exerciseId}`} key={exerciseId}>
                                <div className="exercise-summary-card">
                                    <h3>{exercise.name}</h3>
                                    <img src={exercise.gifUrl} alt={exercise.name} />
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        ))}
    </div>
);

return (
    <div>
        <TrainingDays weiderRoutine={weiderRoutine} />
    </div>
);
}