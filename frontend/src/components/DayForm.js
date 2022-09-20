import { useState } from 'react';
import { useDaysContext } from '../hooks/useDaysContext';

const DayForm = () => {
  const { dispatch } = useDaysContext();
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [year, setYear] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const day = {name, date, year, comment}
    
    const response = await fetch('/days', {
      method: 'POST',
      body: JSON.stringify(day),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setError(null);
      setName('');
      setDate('');
      setYear('');
      setComment('');
      setError(null);
      setEmptyFields([]);
      console.log('new day added:', json);
      dispatch({type: 'CREATE_DAY', payload: json});
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Day</h3>

      <label>Month:</label>
      <select
      type="text"
      onChange={(e) => setName(e.target.value)} 
      value={name}
      className={emptyFields.includes('name') ? 'error' : ''}
      >
        <option value="0">Select a month</option>
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>
      </select>

      <label>Day of the month:</label>
      <input 
        type="number" 
        onChange={(e) => setDate(e.target.value)} 
        value={date}
        className={emptyFields.includes('date') ? 'error' : ''}
      />

      <label>Year:</label>
      <input 
        type="number" 
        onChange={(e) => setYear(e.target.value)} 
        value={year} 
        className={emptyFields.includes('year') ? 'error' : ''}
      />

      <label>Comment:</label>
      <input 
        type="text" 
        onChange={(e) => setComment(e.target.value)} 
        value={comment} 
      />

      <button>Add a New Day</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default DayForm;