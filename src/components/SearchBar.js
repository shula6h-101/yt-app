import React, { useState } from 'react';

const SearchBar = ({ OnSubmit }) => {
    const [term, setTerm] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault()
        OnSubmit(term)
    };

    return (
        <div className="ui segment container">
            <label>Video Search</label>
            <form className="ui fluid icon input" onSubmit={onFormSubmit}>
                <input type="text" placeholder="Search..." value={term} onChange={(e) => setTerm(e.target.value)} />
                <i className="search icon"></i>
            </form>
        </div>
    );
};

export default SearchBar;
