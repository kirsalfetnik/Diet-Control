import { useDaysContext } from "../hooks/useDaysContext";
import { useAuthContext } from "../hooks/useAuthContext";

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const DayDetails = ({ day }) => {
    const { dispatch } = useDaysContext();
    const { user } = useAuthContext();

    const handleClick = async () => {
        if (!user) {
            return
        }
        const response = await fetch('/days/' + day._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        });
        const json = await response.json();

        if (response.ok) {
            dispatch({type: 'DELETE_DAY', payload: json});
        }
    }

    return (
        <div className="day-details">
            <h4>{day.name}</h4>
            <p><strong>Day of the month: </strong>{day.date}</p>
            <p><strong>Year: </strong>{day.year}</p>
            <p><strong>Comment: </strong>{day.comment}</p>
            <p>{formatDistanceToNow(new Date(day.createdAt), { addSuffix: true })}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    );
}

export default DayDetails;