
import Button from 'components/Button/Button';
import css from './Header.module.scss';
import { ReactComponent as Logo } from '../../img/logo.svg';

const Header = () => {

  return (
    <div className={css.container}>
      <div className={css.logo}>
        <Logo className={css.svg}/>
      </div>
      <ul className={css.nav}>
        <li className={css.navItem}>
          <Button text='Users' type='button'/>
        </li>
        <li className={css.navItem}>
        <Button text='Sign Up' type='button'/>
        </li>
      </ul>
    </div>
  )
};


export default Header;