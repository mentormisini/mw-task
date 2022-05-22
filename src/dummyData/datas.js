import React from "react";
import Button from "../Components/Button/button";

const Datas=(props)=>{
    return (
        <div className={props.background}>
            <img src={props.iconimage} alt='a'/>
            <h1> {props.title} </h1>
            <p> {props.description}</p>
            <Button styleClass={props.btnstyle}></Button>
        </div>
    )
}

export default Datas;
