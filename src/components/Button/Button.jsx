
import css from './Button.module.scss';

const Button = ({text, type, onClick}) => {

  return (
    <button className={css.btn} type={type} onClick={onClick}>
      {text}
    </button>
  )
};


export default Button; 