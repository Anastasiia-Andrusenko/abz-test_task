
import { IoIosCloseCircleOutline } from "react-icons/io";
import css from './Modal.module.scss';
import { TbFaceIdError } from "react-icons/tb";
import SuccessImg from '../../img/success.svg';
import { useEffect } from "react";

const Modal = ({ isOpen, message, onClose, isSuccess }) => {
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };


  return  <div className={css.modal} onClick={handleOverlayClick}>
  <div className={css.modalContent}>
  {isSuccess ? <img src={SuccessImg} alt='success' className={css.successImg}/> : <TbFaceIdError className={css.errorImg}/>}
    <p className={css.text}>{message}</p>
    <div onClick={onClose} className={css.icon}><IoIosCloseCircleOutline className={css.cross}/></div>
  </div>
</div>
};

export default Modal;