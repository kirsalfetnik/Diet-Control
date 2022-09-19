import { useState } from 'react';

const Search = () => {
    const [query, setQuery] = useState('');

    return (
        <div className="search">
            <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            />
        </div>
    )
}

export default Search;