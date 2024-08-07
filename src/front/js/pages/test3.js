import React, { useContext } from 'react';
import RoutineDisplay from '../component/routineDisplay';
import { Context } from '../store/appContext';

const Test3 = () => {
    // const { actions } = getState({ getStore: () => {}, getActions: () => actions });
    const { store, actions } = useContext(Context);

    return (
        <div className="conatiner">
            {!store}
        </div>
    );
};

export default Test3;
