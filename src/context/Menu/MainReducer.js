import { GET_MAIN, GET_DISH } from '../types';

const MainReducer = (state, action) => {
    const { payload, type } = action

    switch (type) {
        case GET_MAIN:
            return {
                ...state,
                mains: payload
            }
        case GET_DISH:
            return {
                ...state,
                selectedMain: payload
            }
        default:
            return state;
    }
};

export default MainReducer;