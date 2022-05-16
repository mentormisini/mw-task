import React from "react";
import classes from './button.module.css';

const Button =  ({ styleClass, value, onClick}) => (
    <button className={`${classes.btn} ${styleClass}`}
            onClick={(event:MouseEvent<HTMLButtonElement>)=>onClick(event)}>
            {value='Check Course'}
    </button>
);

export default Button;
