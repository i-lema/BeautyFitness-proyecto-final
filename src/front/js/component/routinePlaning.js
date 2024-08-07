import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { FullBody2 } from "./2DaysFullBody";
import { FullBody3 } from "./3DaysFullBody";
import { WeiderRoutine } from "./4DaysWeider";

export const Choose = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const navigate = useNavigate();
    const weiderRoutine = {
        "Día 1": ["0025", "0047", "0314", "0179", "0188", "1269", "0285", "0315", "2741", "0313", "0757", "1326"],
        "Día 2": ["3418", "0652", "0841", "0027", "0180", "0193", "1319", "0861", "2616", "0327", "0061", "0194", "0591", "1767", "0814", "0241"],
        "Día 3": ["0032", "0054", "1757", "1774", "1417", "0586", "3195", "0599", "0696", "0043"],
        "Día 4": ["3697", "0178", "0192", "1457", "0553", "0587", "2137", "0310", "0326", "0334", "0405", "0426"],
        "Extra": ["0464", "0457", "3679", "3670", "0857", "1761", "1764", "0472", "0474", "0001"]
    };

    return (
        <div>
        {store.trainingDays == 2 ? (
            <FullBody2 />
        ) : store.trainingDays == 3 ? (
            <FullBody3 />
        ) : store.trainingDays == 4 ? (
            <WeiderRoutine />
        ) : store.trainingDays == 5 ? (
            <FullBody2 />
        ) : (
            <FullBody2 />
        )}
    </div>
    );
};

Choose.propTypes = {
    match: PropTypes.object
};







