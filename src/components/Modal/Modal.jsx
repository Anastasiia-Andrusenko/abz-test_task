// ---------------------------------- МОДАЛЬНЕ ВІКНО
// Коли юзер натискає на кнопку submit, то відкривається ця модалка.
// Вона містить дві опції наповнення. 1-Повідомлення з помилкою про запит,
// 2 - повідомлення про успіх. Вміст підставляється динамічно в залежності від результату post запиту
import { IoIosCloseCircleOutline } from 'react-icons/io';
import css from './Modal.module.scss';
import { TbFaceIdError } from 'react-icons/tb';
import SuccessImg from '../../img/success.svg';
import { useCallback, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

const Modal = ({ isOpen, message, onClose, isSuccess }) => {
	// -------------------------------- СКРОЛЛ ДО ЮЗЕРІВ після успішного сабміту
	const handleClose = useCallback(() => {
		if (isSuccess) {
			scroll.scrollTo(600, {
				duration: 1000,
				smooth: 'easeInOutQuad',
			});
		}
		onClose();
	}, [isSuccess, onClose]);

	useEffect(() => {
		const handleEsc = e => {
			if (e.key === 'Escape') {
				handleClose();
			}
		};

		if (isOpen) {
			document.documentElement.style.overflow = 'hidden';
			document.body.style.overflow = 'hidden';
			window.addEventListener('keydown', handleEsc); /* ESC клік */
		} else {
			document.documentElement.style.overflow = '';
			document.body.style.overflow = '';
			window.removeEventListener('keydown', handleEsc);
		}

		return () => {
			document.documentElement.style.overflow = '';
			document.body.style.overflow = '';
			window.removeEventListener('keydown', handleEsc); /* зняти ESC клік */
		};
	}, [isOpen, handleClose]);

	// -------------------------------- ОВЕРЛЕЙ клік
	const handleOverlayClick = e => {
		if (e.target === e.currentTarget) {
			handleClose();
		}
	};

	if (!isOpen) return null;

	return (
		<div className={css.modal} onClick={handleOverlayClick}>
			<div className={css.modalContent}>
				{isSuccess ? (
					<img src={SuccessImg} alt="success" loading="lazy" className={css.successImg} />
				) : (
					<TbFaceIdError className={css.errorImg} />
				)}
				<p className={css.text}>{message}</p>
				<div onClick={handleClose} className={css.icon}>
					<IoIosCloseCircleOutline className={css.cross} />
				</div>
			</div>
		</div>
	);
};

export default Modal;
