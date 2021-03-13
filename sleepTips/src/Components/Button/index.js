import css from './button.module.css';

function Button({show, text}){
    return(
    <div>
        <button className={css.buttons} onClick={show}>{text}</button>
    </div>
    )
}

export default Button;