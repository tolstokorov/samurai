import React from "react";
import Header from '../Header';
import Profile from '../Profile';
import Nav from '../Nav';
import Footer from '../Footer';
import styles from './index.module.css';
import Dialogs from "../Dialogs";
import { Route } from "react-router-dom";

function App() {

  alert('v4');

  return (
    <div className={ styles.grid }>

      <header className={ styles.header }>
        <Header />
      </header>

      <div className={ styles.center }>
        <div className={ styles.centerInner }>

          <main className={ styles.main }>
            <Route exact path='/' component={ Profile } />
            <Route path='/profile' component={ Profile } />
            
            <Route path='/dialogs' component={ Dialogs } />
          </main>

          <nav className={ styles.nav }>
            <Nav />
          </nav>
          
        </div>
      </div>

      <footer className={ styles.footer }>
        <Footer />
      </footer>
      
    </div>
  );
}

export default App;
