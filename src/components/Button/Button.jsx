
import css from './Button.module.scss';

const Button = ({text, type}) => {

  return (
    <button className={css.btn} type={type}>
      {text}
    </button>
  )
};


export default Button; 