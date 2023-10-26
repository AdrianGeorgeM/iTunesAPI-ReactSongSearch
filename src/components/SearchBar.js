import React, { useState } from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ onSearch }) => {
	const [query, setQuery] = useState('');

	const handleSearch = () => {
		if (query) {
			onSearch(query);
		}
	};

	return (
		<div className='search-bar'>
			<input
				type='text'
				placeholder='Search for songs...'
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<button onClick={handleSearch}>Search</button>
		</div>
	);
};

export default SearchBar;
