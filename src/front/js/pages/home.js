import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Card } from "../component/Card";
import RecommendedRoutine from "./recommendedRoutine";

export const Home = () => {
    const { store } = useContext(Context);

    return (
        <div className="home-container bg-dark text-light">
            {!store.token ? (
                <div className="card-container">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            ) : (
                <div className="main-content">
                    <div className="link-grid">
                        <div className="link-item">
                            <Link to="/exercices" className="link-card">
                                <h1 className="link-title">Exercises</h1>
                            </Link>
                        </div>
                        <div className="link-item">
                            <Link to="/test5" className="link-card">
                                <h1 className="link-title">Custom Workout</h1>
                            </Link>
                        </div>
                        <div className="link-item">
                            <Link to="/profile" className="link-card">
                                <h1 className="link-title">Profile</h1>
                            </Link>
                        </div>
                        <div className="link-item">
                            <Link to="/test2" className="link-card">
                                <h1 className="link-title">What Routine Should I Choose?</h1>
                            </Link>
                        </div>
                    </div>
                    <RecommendedRoutine />
                </div>
            )}
        </div>
    );
};
