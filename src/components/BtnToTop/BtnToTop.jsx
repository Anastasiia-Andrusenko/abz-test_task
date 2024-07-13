/* ______________________________________________BtnToTop
Компонент що показує стрілку "вверх" коли юзер достатньо прогорнув сторінку вниз. 
 */

import React, { useState, useEffect } from 'react';
import { FiArrowUpCircle } from 'react-icons/fi';
import css from './BtnToTop.module.scss';

const BtnToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		if (window.pageYOffset > 800) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};
	// ----------------------- НАЛАШТУВАННЯ СКРОЛЛУ
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility);
		return () => {
			window.removeEventListener('scroll', toggleVisibility);
		};
	}, []);

	return (
		<div
			className={`${css.btnWrapper} ${isVisible ? css.visible : ''}`}
			onClick={scrollToTop}
		>
			<div className={css.btn} onClick={scrollToTop}>
				<FiArrowUpCircle className={css.icon} />
			</div>
		</div>
	);
};

export default BtnToTop;
