import classes from './card.module.css';

const Card = props => {
    return(
        <div className={`${classes.box} ${props.className}`}>{props.children}</div>
    );
};

export default Card;
