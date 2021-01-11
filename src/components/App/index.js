import React from "react";
import { Route, Switch } from "react-router-dom";
import Dialogs from "../Dialogs";
import Footer from '../Footer';
import Header from '../Header';
import Nav from '../Nav';
import Profile from '../Profile';
import Users from '../Users';
import styles from './index.module.css';


const stubStyles = {
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'darkcyan',
  fontSize: '20vmin'
};
const Stub = () => <div style={ stubStyles }>Stub</div>;
const Error404 = () => <div style={ { ...stubStyles, backgroundColor: 'darkorange' } }>404</div>;

const App = (props) => {
  return (
    <div className={ styles.grid }>

      <header className={ styles.header }>
        <Header />
      </header>

      <div className={ styles.center }>
        <div className={ styles.centerInner }>

          <main className={ styles.main }>
            <Switch>
              <Route exact path='/' component={ Profile }/>
              <Route path='/profile' component={ Profile }/>
              
              <Route path='/dialogs' component={ Dialogs }/>

              <Route path='/users' component={ Users }/>

              <Route path='/news' component={ Stub } />
              <Route path='/music' component={ Stub } />
              <Route path='/settings' component={ Stub } />

              <Route path='*' component={ Error404 } />
            </Switch>
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
