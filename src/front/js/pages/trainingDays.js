import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";


import React from "react";
import { Link } from "react-router-dom";
import "../../styles/trainingDays.css";

const TrainingDays = () => {
    const { actions } = useContext(Context);
    const [days, setDays] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        actions.setTrainingDays(days);
    };

    return (
        <div className="text-center my-5">
            <form className="my-5 d-flex flex-column justify-content-center align-items-center bg-dark text-light" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="days" className="form-label">Número de días de entrenamiento por semana</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="days" 
                        value={days} 
                        onChange={(e) => setDays(parseInt(e.target.value, 10))} 
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default TrainingDays;

