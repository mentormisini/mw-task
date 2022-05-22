import React from "react";
import classes from './button.module.css';

const Button =  ({ styleClass, value}) => (
    <button className={`${classes.btn} ${styleClass}`}
            onClick={handleClick}>
            {value='Check course'}
    </button>
);
const handleClick=()=>{
    alert('Check Course Clicked');
}

export default Button;
