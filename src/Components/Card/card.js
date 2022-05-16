import classes from 'card.module.css';
const Card = props => {
    return(
    <div className="container">
        <div className={`${classes.box} ${props.classname}`}>{props.children}</div>
    </div>
    );
};
export default Card;
