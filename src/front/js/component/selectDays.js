import React from "react";
import TrainingDays from "../pages/trainingDays";
import RecommendedRoutine from "../pages/recommendedRoutine";

export const SelectDays = () => {
    return (
        <div className="h-100 d-flex flex-column justify-content-center align-items-center py-5">
            <h1 className="display 3">Choose the number of days you'd want to train</h1>
            <div>
            <TrainingDays />
            <RecommendedRoutine />
            </div>
        </div>
    )
}