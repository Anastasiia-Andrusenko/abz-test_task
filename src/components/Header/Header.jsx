// ----------------------------------- ХЕДЕР З навігацією
import Button from '../Button/Button';
import css from './Header.module.scss';
import { ReactComponent as Logo } from '../../img/logo.svg';

const Header = ({ onClick }) => {
	const handleOnBtn = name => {
		onClick(name);
	};

	return (
		<div className={css.container}>
			<div className={css.logo}>
				<Logo className={css.svg} />
			</div>
			<ul className={css.nav}>
				<li className={css.navItem}>
					<Button
						text="Users"
						type="button"
						onClick={() => handleOnBtn('users')}
					/>
				</li>
				<li className={css.navItem}>
					<Button
						text="Sign Up"
						type="button"
						onClick={() => handleOnBtn('signUp')}
					/>
				</li>
			</ul>
		</div>
	);
};

export default Header;
