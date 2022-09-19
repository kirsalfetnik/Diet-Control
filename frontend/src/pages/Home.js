import { useEffect, useState } from "react";
import { useDaysContext } from '../hooks/useDaysContext';

// components
import DayDetails from '../components/DayDetails';
import DayForm from '../components/DayForm';

const Home = () => {
    const {days, dispatch} = useDaysContext();
    const [query, setQuery] = useState('');

    useEffect(() => {
        const fetchDays = async () => {
            const response = await fetch('/days');
            const json = await response.json();

            if (response.ok) {
                dispatch({type: 'SET_DAYS', payload: json});
            }
        }

        fetchDays();
    }, [dispatch]);
    
    return (
        <div>
        <div className="search">
            <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            />
        </div>
        <div className="home">
            <div className="days">
                {days && days.filter((day) => {
                    if (query === "") {
                        return day
                    } else if (day.name.toLowerCase().includes(query.toLowerCase())) {
                        return day
                    } 
                    return false
                }).map((day) => {
                    return (
                        <DayDetails key={day._id} day={day}/> 
                    );
                })}
            </div>
            <DayForm />
        </div>
        </div>
    )
}


export default Home;