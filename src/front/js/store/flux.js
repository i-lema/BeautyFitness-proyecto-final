import Swal from 'sweetalert2';

const weiderRoutine = {
    "Día 1": ["0025", "0047", "0314", "0179", "0188", "1269", "0285", "0315", "2741", "0313", "0757", "1326"],
    "Día 2": ["3418", "0652", "0841", "0027", "0180", "0193", "1319", "0861", "2616", "0327", "0061", "0194", "0591", "1767", "0814", "0241"],
    "Día 3": ["0032", "0085", "0300", "1459", "1757", "0054", "0078", "0114", "0058", "0099", "0410", "0597", "1774", "1417", "0586", "3195", "0599", "0696", "0043", "1436", "0068", "1476", "0743", "1383", "0605", "0739"],
    "Día 4": ["3697", "0178", "0192", "1457", "0553", "0587", "2137", "0310", "0326", "0334", "0405", "0426"],
    "Extra": ["0464", "0457", "3679", "3670", "0857", "1761", "1764", "0472", "0474", "0001"]
};

// Define the other routines similarly...

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            token: null,
            message: null,
            user: null,
            exercises: [],
            trainingDays: null,
            recommendedRoutine: null,
            recommendedExercises: [],
            routineExercises: {},
            demo: [
                {
                    title: "FIRST",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ]
        },
        actions: {
            setTrainingDays: async (days) => {
				const store = getStore();
				setStore({ trainingDays: days });
				await getActions().recommendRoutine(days);

				if (store.user && store.token) {
					try {
						const response = await fetch(`https://congenial-robot-5gvv7jpgq7wvc7vx6-3001.app.github.dev/api/user/${store.user.id}`, {
							method: "PUT",
							headers: {
								"Content-Type": "application/json",
								"Authorization": `Bearer ${store.token}`
							},
							body: JSON.stringify({ trainingDays: days })
						});

						if (!response.ok) {
							throw await response.json();
						}

						const data = await response.json();
						const updatedUser = { ...store.user, trainingDays: days };
						setStore({ user: updatedUser });
						Swal.fire({
							icon: "success",
							title: "Success!",
							text: data.msg,
						});
					} catch (error) {
						Swal.fire({
							icon: "error",
							title: "Oops...",
							text: error.msg || "Error updating training days",
						});
						console.log(error);
					}
				}
			},
            
            fetchExerciseById: async (id) => {
                const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`;
                const headers = {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "X-RapidAPI-Key": "453ba30c6cmsh6b25ac11c3ebdc4p1cec91jsn633f42181161",
                    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com"
                };

                try {
                    const response = await fetch(url, { method: "GET", headers });
                    if (!response.ok) throw new Error("Error fetching exercise");

                    const exercise = await response.json();
                    return {
                        id: exercise.id,
                        name: exercise.name,
                        bodyPart: exercise.bodyPart,
                        equipment: exercise.equipment,
                        gifUrl: exercise.gifUrl,
                        target: exercise.target,
                        secondaryMuscles: exercise.secondaryMuscles || [],
                        instructions: exercise.instructions || []
                    };
                } catch (error) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: error.message,
                    });
                    console.log(error);
                    return null;
                }
            },

            fetchExercisesByIds: async (ids) => {
                const actions = getActions();
                const exercises = await Promise.all(ids.map(id => actions.fetchExerciseById(id)));
                return exercises.filter(exercise => exercise !== null);
            },

            getRoutineExercises: async (routine) => {
                const days = Object.keys(routine);
                const routineExercises = {};

                for (let day of days) {
                    const ids = routine[day];
                    const exercises = await getActions().fetchExercisesByIds(ids);
                    routineExercises[day] = exercises;
                }

                setStore({ routineExercises });
            },

            getWeiderRoutine: async () => {
                const actions = getActions();
                await actions.getRoutineExercises(weiderRoutine);
            },

            getFullBodyRoutine: async () => {
                const actions = getActions();
                await actions.getRoutineExercises(fullBodyRoutine);
            },

            getPushPullRoutine: async () => {
                const actions = getActions();
                await actions.getRoutineExercises(pushPullRoutine);
            },

            getTorsoLegRoutine: async () => {
                const actions = getActions();
                await actions.getRoutineExercises(torsoLegRoutine);
            },

			getRoutine: async (routineType) => {
                switch (routineType) {
                    case 'weider':
                        await getActions().getWeiderRoutine();
                        break;
                    case 'fullBody':
                        await getActions().getFullBodyRoutine();
                        break;
                    case 'pushPull':
                        await getActions().getPushPullRoutine();
                        break;
                    case 'torsoLeg':
                        await getActions().getTorsoLegRoutine();
                        break;
                    default:
                        console.error('Invalid routine type');
                }
            },

            // recommendRoutine: (days) => {
            //     let routine;
            //     if (days === 2 || days === 3) {
            //         routine = "Full-body";
            //     } else if (days === 4 || days === 5) {
            //         routine = "Push-Pull, Torso-Pierna o Weider";
            //     } else {
            //         routine = "No se puede recomendar una rutina con el número de días proporcionado";
            //     }
            //     setStore({ recommendedRoutine: routine });
            //     Swal.fire({
            //         icon: "info",
            //         title: "Recomendación de Rutina",
            //         text: `Recomendamos una rutina: ${routine}`,
            //     });
            // },

			recommendRoutine: async (days) => {
                let routine;
                let exerciseIds = [];
                if (days === 2 || days === 3) {
                    routine = "Full-body";
                    exerciseIds = [
                        "0025", "0652", "0314", "0043", "0188", "0032", "1457", "2741", "0241",
                        "0043", "0025", "0099", "0652", "0085", "0326", "1383", "0814", "1774", "0315",
                        "0841", "0054", "0180", "0025", "0027", "1757", "0587", "0313", "3697", "0194"
                    ];
                } else if (days === 4) {
                    routine = "Weider";
                    exerciseIds = [
                        "0025", "0405", "0814", "0308", "0334", "0241",
                        "0652", "0292", "0198", "0180", "3697", "2741", "0313",
                        "0043", "0336", "0085", "0739", "0599", "1383",
                        "1457", "0027", "0314", "0285", "0340"
                    ];
                } else if (days === 5) {
                    routine = "Tree Trunk Legs(Avaliable soon)";
                    exerciseIds = [
                        "0025", "0814", "0405", "0378", "0652", "0489",
                        "0043", "0743", "0599", "0117", "1383",
                        "0652", "0027", "0292", "0076", "3697", "2741", "0314", "0334",
                        "0032", "0054", "1409", "0043", "1383",
                        "1457", "0178", "0025", "1749", "3697", "0652", "0076"
                    ];
                } else {
                    routine = "It is not possible to recommend a routine with the number of days provided";
                }
                setStore({ recommendedRoutine: routine });

                if (exerciseIds.length > 0) {
                    const exercises = await Promise.all(
                        exerciseIds.map(id => getActions().fetchExerciseById(id))
                    );
                    setStore({ recommendedExercises: exercises.filter(ex => ex !== null) });
                }

                Swal.fire({
                    icon: "info",
                    title: "Recomendación de Rutina",
                    text: `Recomendamos una rutina: ${routine}`,
                });
            },

			// Obtener token y usuario de localStorage y actualizar store
			// Obtener token y usuario de localStorage y actualizar store
			// syncTokenFromLocalStorage: () => {
			// 	const token = localStorage.getItem("token");
			// 	const user = JSON.parse(localStorage.getItem("user"));
			// 	if (token && token != "" && token != "undefined") setStore({ token: token });
			// 	if (user) setStore({ user: user });
			// },

			syncTokenFromLocalStorage: () => {
				const token = localStorage.getItem("token");
				const user = JSON.parse(localStorage.getItem("user"));
				if (token && token != "" && token != "undefined") setStore({ token: token });
				if (user) setStore({ user: user });
			},						

			// Acción de inicio de sesión
			login: async (email, password) => {
				try {
					const response = await fetch("https://congenial-robot-5gvv7jpgq7wvc7vx6-3001.app.github.dev/api/login", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							email,
							password
						})
					});

					if (!response.ok) {
						throw await response.json();
					}

					const data = await response.json();
					localStorage.setItem('token', data.token);
					localStorage.setItem('user', JSON.stringify(data.user.id));
					setStore({ token: data.token, user: data.user });
					return true;
				} catch (error) {
					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: error.msg,
					});
					console.log(error);
				}
			},
								

			register: async (name, surname, email, username, password) => {
                try {
                    const response = await fetch("https://congenial-robot-5gvv7jpgq7wvc7vx6-3001.app.github.dev/api/register", {
                        method: "POST",
                        headers: {
                            "content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email,
                            password,
                            name,
                            surname,
                            username
                        })
                    })
                    if (!response.ok) {
                        throw await response.json()
                    }
                    const data = await response.json()
                    Swal.fire({
                        icon: "success",
                        title: "Success!",
                        text: data.msg,
                    });
                    return true
                } catch (error) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: error.msg,
                    });
                    console.log(error)
                }
            },

			// updateUser: async (updatedUserData) => {
			// 	const store = getStore();
			// 	if (!store.user || !store.token) {
			// 		Swal.fire({
			// 			icon: "error",
			// 			title: "User not logged in",
			// 			text: "Please log in first",
			// 		});
			// 		return;
			// 	}
				
			// 	try {
			// 		const response = await fetch(`https://congenial-robot-5gvv7jpgq7wvc7vx6-3001.app.github.dev/api/user/${store.user.id}`, {
			// 			method: "PUT",
			// 			headers: {
			// 				"Content-Type": "application/json",
			// 				"Authorization": `Bearer ${store.token}`
			// 			},
			// 			body: JSON.stringify(updatedUserData)
			// 		});
			
			// 		if (!response.ok) {
			// 			throw await response.json();
			// 		}
			
			// 		const data = await response.json();
			// 		Swal.fire({
			// 			icon: "success",
			// 			title: "Success!",
			// 			text: data.msg,
			// 		});
					
			// 		const updatedUser = { ...store.user, ...updatedUserData };
			// 		setStore({ user: updatedUser });
					
			// 		return true;
			// 	} catch (error) {
			// 		Swal.fire({
			// 			icon: "error",
			// 			title: "Oops...",
			// 			text: error.msg,
			// 		});
			// 		console.log(error);
			// 	}
			// },		
			
			updateUser: async (updatedUserData) => {
				const store = getStore();
				if (!store.user || !store.token) {
					Swal.fire({
						icon: "error",
						title: "User not logged in",
						text: "Please log in first",
					});
					return;
				}
			
				try {
					const response = await fetch(`https://congenial-robot-5gvv7jpgq7wvc7vx6-3001.app.github.dev/api/user/${store.user.id}`, {
						method: "PUT",
						headers: {
							"Content-Type": "application/json",
							"Authorization": `Bearer ${store.token}`
						},
						body: JSON.stringify(updatedUserData)
					});
			
					if (!response.ok) {
						throw await response.json();
					}
			
					const data = await response.json();
					Swal.fire({
						icon: "success",
						title: "Success!",
						text: data.msg,
					});
			
					const updatedUser = { ...store.user, ...updatedUserData };
					setStore({ user: updatedUser });
			
					return true;
				} catch (error) {
					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: error.msg,
					});
					console.log(error);
				}
			},
			
			getUserProfile: async (userId) => {
				const store = getStore();
				if (!store.token) {
					Swal.fire({
						icon: "error",
						title: "Not authenticated",
						text: "Please log in first",
					});
					return;
				}
			
				try {
					const response = await fetch(`https://congenial-robot-5gvv7jpgq7wvc7vx6-3001.app.github.dev/api/user/${userId}`, {
						method: "GET",
						headers: {
							"Authorization": `Bearer ${store.token}`
						}
					});
			
					if (!response.ok) {
						throw await response.json();
					}
			
					const data = await response.json();
					return data;
				} catch (error) {
					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: error.msg,
					});
					console.log(error);
				}
			},
			
			logout: () => {
				localStorage.removeItem('token');
				localStorage.removeItem('user');
				setStore({ token: null, user: null });
			},

			fetchExercisesByBodyPart: async (bodyPart) => {
                const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=20&offset=0`;
                const headers = {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "x-rapidapi-ua": "RapidAPI-Playground",
                    "x-rapidapi-key": "453ba30c6cmsh6b25ac11c3ebdc4p1cec91jsn633f42181161",
                    "x-rapidapi-host": "exercisedb.p.rapidapi.com"
                };

                try {
                    const response = await fetch(url, { method: "GET", headers });
                    if (!response.ok) throw new Error("Error fetching exercises");

                    const data = await response.json();
                    setStore({ exercises: data });
                } catch (error) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: error.message,
                    });
                    console.log(error);
                }
            },

			createTrainingDays: async (trainingDaysData) => {
                const store = getStore();
                if (!store.token) {
                    Swal.fire({ icon: "error", title: "User not logged in", text: "Please log in first" });
                    return;
                }

                try {
                    const response = await fetch(`https://congenial-robot-5gvv7jpgq7wvc7vx6-3001.app.github.dev/api/training-days`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${store.token}`
                        },
                        body: JSON.stringify(trainingDaysData)
                    });

                    if (!response.ok) {
                        throw await response.json();
                    }

                    const data = await response.json();
                    Swal.fire({ icon: "success", title: "Success!", text: data.msg });
                    return true;
                } catch (error) {
                    Swal.fire({ icon: "error", title: "Oops...", text: error.msg });
                    console.log(error);
                }
            },

			getMessage: async () => {
				const store = getStore();
				try {
					const resp = await fetch(`${process.env.BACKEND_URL}/api/hello`, {
						headers: {
							Authorization: `Bearer ${store.token}`
						}
					});
					const data = await resp.json();
					setStore({ message: data.message });
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error);
				}
			},
			

			// getMessage: async () => {
			// 	try{
			// 		// fetching data from the backend
			// 		const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
			// 		const data = await resp.json()
			// 		setStore({ message: data.message })
			// 		// don't forget to return something, that is how the async resolves
			// 		return data;
			// 	}catch(error){
			// 		console.log("Error loading message from backend", error)
			// 	}
			// },
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
