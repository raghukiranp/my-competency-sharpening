import React from 'react';
import { NavLink } from "react-router-dom";

// Changed to Nav link instead of Link
const FilterLink = ({filter, children}) => (
    <NavLink exact to={filter === 'all' ? '': filter}
          activeStyle={{textDecoration:'none', color:'black'}}>
        {children}
    </NavLink>
);

export default FilterLink;