import React, { useContext } from "react";
import { Context } from "../store/appContext";

const RecommendedRoutine = () => {
    const { store } = useContext(Context);

    return (
        <div className="text-center my-5">
            {store.recommendedRoutine && (
                <div className="alert alert-info" role="alert">
                    Recomendamos una rutina: {store.recommendedRoutine}
                </div>
            )}
        </div>
    );
};

export default RecommendedRoutine;

