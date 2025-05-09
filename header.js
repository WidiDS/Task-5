import React from 'react';

const Header = () => {
    return (
        <header>
            <h1>Pokémon</h1>
            <input type="text" placeholder="Search..." />
            <select>
                <option>Sort by</option>
                <option>Name</option>
                <option>Type</option>
            </select>
        </header>
    );
};

export default Header;
