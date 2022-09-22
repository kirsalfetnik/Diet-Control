import { useAuthContext } from "./useAuthContext";
import { useDaysContext } from "./useDaysContext";

export const useLogout = () => {
    const { dispatch } = useAuthContext();
    const { dispatch: daysDispatch } = useDaysContext();

    const logout = () => {
        // remove user from storage
        localStorage.removeItem('user');

        // dispatch logout action
        dispatch({type: 'LOGOUT'});
        daysDispatch({type: 'SET_DAYS', payload: null });
    }

    return {logout};
}