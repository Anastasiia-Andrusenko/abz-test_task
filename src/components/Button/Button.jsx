
import css from './Button.module.scss';

const Button = ({text, type, onClick, disabled}) => {

  return (
    <button className={css.btn} type={type} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  )
};


export default Button; 