import React from 'react';

const Button =  ({ styleClass, value, onClick}) => (
    <button className={`${styleClass}`}
            onClick={(event:MouseEvent<HTMLButtonElement>)=>onClick(event)}>
        {value}
    </button>
);

export default Button;
