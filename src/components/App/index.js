import React from "react";
import Header from '../Header';
import Profile from '../Profile';
import Nav from '../Nav';
import Footer from '../Footer';
import styles from './index.module.css';
import Dialogs from "../Dialogs";
import { Route, Switch } from "react-router-dom";


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

  const profile = routeProps => <Profile { ...routeProps }
  profilePage={ props.store.setState().profilePage }
  dispatch={ props.store.dispatch }
  addPost={ props.store.dispatch } />;

  const dialogs = routeProps => <Dialogs { ...routeProps }
  dialogsPage={ props.store.setState().dialogsPage }
  dispatch={ props.store.dispatch }
  owner={ props.store.setState().owner } />;

  return (
    <div className={ styles.grid }>

      <header className={ styles.header }>
        <Header />
      </header>

      <div className={ styles.center }>
        <div className={ styles.centerInner }>

          <main className={ styles.main }>
            <Switch>
              <Route exact path='/'>
                { profile }
              </Route>
              <Route path='/profile'>
                { profile }
              </Route>
              
              <Route path='/dialogs'>
                { dialogs }
              </Route>

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
