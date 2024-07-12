import Button from '../Button/Button';
import css from './SignUp.module.scss';
// import { useEffect, useState } from 'react';
// import { fetchPositions } from 'api/api';

const SignUp = ({ updateUserList }) => {
  // const [positions, setPositions] = useState([]);
  // const [error, setError] = useState(null);
  // const [success, setSuccess] = useState(null);
  // const [form, setForm] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   position_id: '',
  //   photo: null,
  // });

  // useEffect(() => {
  //   const getPosition = async () => {
  //     try {
  //       const data = await fetchPositions();
  //       setPositions(data.positions);

  //     } catch (error) {
  //       setError('');
  //     };
  //   };
    
  //   getPosition();
  // }, []);


  
  return (
    <section className={css.section}>
      <div className={css.container}>
        <h2 className={css.title}>
          Working with POST request
        </h2>
        <form className={css.form}>

        <input 
            className={css.input}
            type="text"
            name="name"
            placeholder="Your name"
            // value={form.name}
            // onChange={handleChange}
            required>
          </input>
          <input 
            className={css.input}
            type="email"
            name="email"
            placeholder="Email"
            // value={form.name}
            // onChange={handleChange}
            required>
          </input>
          <input 
            className={css.input}
            type="tel"
            name="phone"
            placeholder="Phone"
            // value={form.name}
            // onChange={handleChange}
            required>
          </input>
          <div className={css.positionsWrapper}>
          <p className={css.positionsTitle}>Select your position</p>
          <ul className={css.positionList}>
            {/* {positions.map((position) => <li 
              key={position.is}
              className={css.positionItem}
              >
              <label className={css.positionName}>
                <input 
                  type='radio'
                  name='position_id'
                  value={position.id}
                  required
                />
                {position.name}
              </label>
            </li>)} */}
          </ul>
          </div>
          
          <input type="file" placeholder='upload'/>

          
          <Button type="submit" text="Sign up" className={css.button} disabled />
        </form>
      </div>
    </section>
  );
};

export default SignUp;