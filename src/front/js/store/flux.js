import Swal from 'sweetalert2';


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			message: null,
			user: null,
			exercises: [],
			trainingDays: null,
            recommendedRoutine: null,
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
			// Use getActions to call a function within a fuction
			
			exampleFunction: () => {
				getActions().changeColor(0, "green");
				fetchExperienceLevels();
			},
			// Función para cargar los niveles de experiencia desde el backend
			fetchExperienceLevels : async () => {
				try {
				  const response = await fetch('https://congenial-robot-5gvv7jpgq7wvc7vx6-3001.app.github.dev/api/experience_levels')
				  if (!response.ok) throw new Error('Error fetching experience levels');
				  const data = await response.json();
				  setStore({ experienceLevels: data });
			  } catch (error) {
				  console.error('Error fetching experience levels:', error);
			  }
			},

			setTrainingDays: async (days) => {
                const store = getStore();
                setStore({ trainingDays: days });
                await getActions().recommendRoutine(days);

                // Actualizar los días de entrenamiento en el backend
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

            recommendRoutine: (days) => {
                let routine;
                if (days === 2 || days === 3) {
                    routine = "Full-body";
                } else if (days === 4 || days === 5) {
                    routine = "Push-Pull, Torso-Pierna o Weider";
                } else {
                    routine = "No se puede recomendar una rutina con el número de días proporcionado";
                }
                setStore({ recommendedRoutine: routine });
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
                    "x-rapidapi-key": "c04e31f8d9msh5585820233eb7f2p1d69dcjsn1b0d4c29a641",
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
