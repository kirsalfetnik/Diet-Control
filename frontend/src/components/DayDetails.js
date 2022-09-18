const DayDetails = ({ day }) => {

    return (
        <div className="day-details">
            <h4>{day.name}</h4>
            <p><strong>Day of the month: </strong>{day.date}</p>
            <p><strong>Year: </strong>{day.year}</p>
            <p><strong>Comment: </strong>{day.comment}</p>
            <p>{day.createdAt}</p>
        </div>
    );
}

export default DayDetails;