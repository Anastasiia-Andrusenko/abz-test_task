// ----------------------------------------------- App - збирає разом всі компоненти
import React, { lazy, Suspense, useCallback, useState } from 'react';
import css from './App.module.scss';
import { Element, scroller } from 'react-scroll';
import BtnToTop from './BtnToTop/BtnToTop';
import Loader from '../img/loader.svg';

const Header = lazy(() => import('../components/Header/Header'));
const Hero = lazy(() => import('../components/Hero/Hero'));
const Users = lazy(() => import('../components/Users/Users'));
const SignUp = lazy(() => import('../components/SignUpSection/SignUpSection'));
const Footer = lazy(() => import('../components/Footer/Footer'));

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
		<Suspense
			fallback={
				<img
					src={Loader}
					alt="loading..."
					loading="lazy"
					className={css.loader}
				/>
			}
		>
			<header className={css.header}>
				<Header onClick={onClickBtn} />
			</header>
			<main className={css.main}>
				<Hero onClick={onClickBtn} />
				<Element name="users">
					<Users update={update} />
				</Element>
				<Element name="signUp">
					<SignUp onRegisterSuccess={updateUsers} />
				</Element>
				<BtnToTop />
			</main>
			<footer>
				<Footer />
			</footer>
		</Suspense>
	);
}

export default App;
