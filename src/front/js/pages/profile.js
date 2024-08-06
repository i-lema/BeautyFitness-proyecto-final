// import React from "react";
// import "../../styles/profile.css";
// import { ProfileCard } from "../component/ProfileCard";
// const Profile = () => {
//   return (
//     <main className="profile-container">
//      <div className="center">
//         <h1 className="mt-5 center">Profile</h1>
//         <h3 className="mt-5"></h3>
//         <ProfileCard />
        
      
//         </div>
//         </main>
    
//   );
// };

// export default Profile;


import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Profile = () => {
    const { store } = useContext(Context);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [username, setUsername] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [gender, setGender] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");

    useEffect(() => {
        if (store.user) {
            setEmail(store.user.email || "");
            setName(store.user.name || "");
            setSurname(store.user.surname || "");
            setUsername(store.user.username || "");
            setBirthDate(store.user.birth_date || "");
            setGender(store.user.gender || "");
            setWeight(store.user.weight || "");
            setHeight(store.user.height || "");
        }
    }, [store.user]);

    return (
        <div className="text-center my-5">
            <h1>Profile</h1>
            <div className="my-3">
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Surname:</strong> {surname}</p>
                <p><strong>Username:</strong> {username}</p>
                <p><strong>Birth Date:</strong> {birthDate}</p>
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>Weight:</strong> {weight}</p>
                <p><strong>Height:</strong> {height}</p>
            </div>
            <Link to="/update-profile" className="btn btn-primary">Edit Profile</Link>
        </div>
    );
};

