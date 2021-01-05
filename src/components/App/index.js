import React from "react";
import Header from '../Header';
import Main from '../Main';
import Nav from '../Nav';
import Footer from '../Footer';
import styles from './index.module.css';

function App() {
  return (
    <div className={ styles.grid }>

      <header className={ styles.header }>
        <Header />
      </header>

      <div className={ styles.center }>
        <div className={ styles.centerInner }>

          <main className={ styles.main }>
            <Main />
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
