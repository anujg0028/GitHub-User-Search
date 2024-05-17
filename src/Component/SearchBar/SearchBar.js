import './searchBar.css';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SearchBar = ({ onSearch }) => {
    const [input, setInput] = useState('');

    const handleSearch = () => {
        if (input.trim()) {
            onSearch(input.trim());
        }
    };

    return (
        <div className='searchBarContainer'>
            <TextField id="outlined-basic" label="" variant="outlined" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter GitHub username" />
            <Button variant="contained" id='searchBtn' onClick={handleSearch}>Search</Button>
        </div>
    );
};

export default SearchBar;
