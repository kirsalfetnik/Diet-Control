import { useEffect, useState } from "react";
// import { useDaysContext } from '../hooks/useDaysContext';

// components
import DayDetails from '../components/DayDetails';
import DayForm from '../components/DayForm';

const Home = () => {
    const [days, setDays] = useState(null);

    useEffect(() => {
        const fetchDays = async () => {
            const response = await fetch('/days');
            const json = await response.json();

            if (response.ok) {
                setDays(json);
            }
        }

        fetchDays();
    }, []);
    
    return (
        <div className="home">
            <div className="days">
                Find a month
                {days && days.map(day => (
                    <DayDetails day={day} key={day._id} /> 
                ))}
            </div>
            <DayForm />
        </div>
    )
}


export default Home;