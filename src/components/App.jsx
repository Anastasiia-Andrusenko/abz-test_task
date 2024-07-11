import React from 'react';
import css from './App.module.scss';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Users from './Users/Users';

function App() {
  return (<>
    <header className={css.header}>
      <Header/>
    </header>
    <main>
      <Hero/>
      <Users/>
    </main>
  </>
  );
}

export default App;
