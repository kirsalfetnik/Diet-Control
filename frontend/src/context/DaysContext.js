import { createContext, useReducer } from 'react';

export const DaysContext = createContext();

export const daysReducer = (state, action) => {
    switch (action.type) {
        case 'SET_DAYS':
            return {
                days: action.payload
            }
        case 'CREATE_DAY':
            return {
                days: [action.payload, ...state.days]
            }
        case 'DELETE_DAY':
            return {
                days: state.days.filter((day) => day._id !== action.payload._id)
            }
        default:
            return state;
    }
}

export const DaysContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(daysReducer, {
        days: null
    });

    return (
        <DaysContext.Provider value={{...state, dispatch}}>
            { children }
        </DaysContext.Provider>
    );
}