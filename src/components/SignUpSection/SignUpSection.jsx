
import css from './SignUpSection.module.scss';
import { useEffect, useState } from 'react';
import { fetchPositions, registerUser } from '../../api/api';
import Modal from '../Modal/Modal';
import SignUpForm from '../SignUpForm/SignUpForm';
import Loader from '../../img/loader.svg';

const SignUpSection = ({onRegisterSuccess}) => {
  const [positions, setPositions] = useState([]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpn, setIsModalOpn] = useState(false);
  

  useEffect(() => {
    const getPosition = async () => {
      try {
        const data = await fetchPositions();
        setPositions(data.positions);
      } catch (error) {
        setError('');
      }
    };

    getPosition();
  }, []);


  const handleRegister = async (form) => {
    setIsLoading(true);

    try {
      const userData = new FormData();
      userData.append('name', form.name);
      userData.append('email', form.email);
      userData.append('phone', form.phone);
      userData.append('position_id', form.position_id);
      userData.append('photo', form.photo);
      await registerUser(userData);

      onRegisterSuccess();
      setSuccess('User successfully registered');
      setIsModalOpn(true);
      return true;
      
    } catch (error) {
      setError(error.message);
      setIsModalOpn(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={css.section}>
      <div className={css.container}>
        <h2 className={css.title}>Working with POST request</h2>
        <SignUpForm positions={positions} onRegister={handleRegister}/>
        {isLoading && (
          <img src={Loader} alt="loading..." className={css.loader} />
        )}
        {error && <Modal isOpen={isModalOpn} message={`${error}`} isSuccess={false} onClose={() => setError(null)} />}
        {success && <Modal isOpen={isModalOpn} message={success} isSuccess={true} onClose={() => setSuccess(null)} />}
      </div>
    </section>
  );
};

export default SignUpSection;
