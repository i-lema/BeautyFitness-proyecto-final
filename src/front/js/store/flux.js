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
