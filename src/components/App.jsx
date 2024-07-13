// ----------------------------------------------- App - збирає разом всі компоненти
import React, { useCallback, useState } from 'react';
import css from './App.module.scss';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Users from './Users/Users';
import SignUpSection from './SignUpSection/SignUpSection';
import { Element, scroller } from 'react-scroll';
import BtnToTop from './BtnToTop/BtnToTop';
import Footer from './Footer/Footer';

function App() {
	const [update, setUpdate] = useState(false);

	// --------------------------------- СКРОЛЛ - до елементів (навігація)
	const onClickBtn = element => {
		scroller.scrollTo(element, {
			duration: 1500,
			smooth: true,
			offset: -40,
		});
		// console.log(`${element}`);
	};

	const updateUsers = useCallback(() => {
		console.log('updt users');
		setUpdate(prev => !prev);
	}, []);

	return (
		<>
			<header className={css.header}>
				<Header onClick={onClickBtn} />
			</header>
			<main className={css.main}>
				<Hero onClick={onClickBtn} />
				<Element name="users">
					<Users update={update} />
				</Element>
				<Element name="signUp">
					<SignUpSection onRegisterSuccess={updateUsers} />
				</Element>
				<BtnToTop />
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	);
}

export default App;
