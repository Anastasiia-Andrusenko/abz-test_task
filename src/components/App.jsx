import React from 'react';
import css from './App.module.scss';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Users from './Users/Users';
import SignUp from './SignUp/SignUp';
import { Element, scroller } from 'react-scroll';

function App() {

  const onClickBtn = (element) => {
    scroller.scrollTo(element, {
      duration: 1500,
      smooth: true,
      offset: -40,
    });
    // console.log(`${element}`);
  };

  return (<>
    <header className={css.header}>
      <Header onClick={onClickBtn}/>
    </header>
    <main>
      <Hero onClick={onClickBtn}/>
      <Element name='users'><Users /></Element>
      <Element name='signUp'><SignUp /></Element>
    </main>
  </>
  );
}

export default App;
