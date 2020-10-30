import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = props => (
    <ul  className={classes.NavigationItems}>
        <NavigationItem link = "/" exact>Home</NavigationItem>
        <NavigationItem link = "/" exact>Profile</NavigationItem>
        <NavigationItem link = "/" exact>About us</NavigationItem>
    </ul>
);

export default navigationItems;