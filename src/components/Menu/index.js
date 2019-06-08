import React from "react";

import countries from './countries'

const Menu = () => (
  <div className="menu">
    {countries.map(country => (
      <div key={country.code} className='menu-item'>
        <a href={`/${country.code.toLowerCase()}`}>{country.name}</a>
      </div>
    ))}
  </div>
);

export default Menu;
