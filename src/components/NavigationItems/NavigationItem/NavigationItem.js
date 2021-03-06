import React from 'react';
import classes from './NavigationItem.css';
import {NavLink} from 'react-router-dom';


const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        {/* <NavLink 
            to={props.link}
            exact={props.exact}
            activeClassName={classes.active}>
                
        </NavLink> */}
        <a>
            {props.children}
        </a>
    </li>
);

export default navigationItem;