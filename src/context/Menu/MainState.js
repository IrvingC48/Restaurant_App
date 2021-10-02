import React, { useReducer } from 'react';
import MainReducer from './MainReducer';
import MainContext from './MainContext';
const MENU = require('../mainsData.json');

const MainState = (props) => {
    const initialState = {
        mains:[],
        selectedMain: null
    };

    const [state, dispatch] = useReducer(MainReducer, initialState)

    const getMain = () => {
        dispatch({
            type: 'GET_MAIN',
            payload: MENU
        });
    };

    const getDish = (main) => {
        const filterByMain = MENU.filter(obj => obj.Main === main);
        dispatch({
            type: 'GET_DISH',
            payload: filterByMain[0].Dishes
        });
    };

    return (
        <MainContext.Provider value={{
            mains: state.mains,
            selectedMain: state.selectedMain,
            getMain,
            getDish
        }}>
            {props.children}
        </MainContext.Provider>
    )
}

export default MainState;
