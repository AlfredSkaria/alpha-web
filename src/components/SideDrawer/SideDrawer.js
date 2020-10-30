import React from 'react';

import classes from './SideDrawer.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../UI/Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../Logo/Logo';

const sideDrawer = props => {
    var attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked = {props.closed}/>
            <div className={attachedClasses.join(' ')} onClick = {props.closed}>
                <div className={classes.Logo}>
                        <Logo />
                    </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    );


};

export default sideDrawer;