import { DaysContext } from '../context/DaysContext';
import { useContext } from 'react';

export const useDaysContext = () => {
    const context = useContext(DaysContext);

    if (!context) {
        throw Error('useDaysContext must be used inside a DaysContextProvider');
    }

    return context;
}
