import React from "react";
import { Link } from "react-router-dom";

import countries from './countries'

const Menu = () => (
  <div className="menu">
    {countries.map(country => (
      <div key={country.code} className='menu-item'>
        <Link to={`/${country.code.toLowerCase()}`}>{country.name}</Link>
      </div>
    ))}
  </div>
);

export default Menu;
