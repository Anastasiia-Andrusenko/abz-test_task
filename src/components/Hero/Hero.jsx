import Button from 'components/Button/Button';
import css from './Hero.module.scss';

const Hero = ({ onClick }) => {

  const handleOnBtn = (name) => {
    onClick(name);
  }
  
  return (
    <div className={css.section}>
      <div className={css.container}>
        <h1 className={css.head}>Test assignment for front-end developer</h1>
        <p className={css.text}>
        What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
        </p>
        <Button text='Sign up' type='button' onClick={() => handleOnBtn('users')}/>
      </div>
    </div>
  )
};

export default Hero;