import React from "react";
import { Route, Switch } from "react-router-dom";
import styles from './index.module.css';

function Messages(props) {
  return (
    <section className={ styles.messages }>
      {/* todo: rewrite copypaste */}
      <Switch>
        <Route exact path='/dialogs/id1' >
          <ul className={ styles.list } >
            <li className={ styles.item } > Message_1 Lorem ipsum dolor sit amet.</li>
            <li className={ styles.item } > Message_2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi qui nulla repellendus, beatae ab illum iste doloribus itaque dignissimos blanditiis veritatis quae libero officia accusamus voluptatibus. Ipsum ipsa in vero!</li>
            <li className={ styles.item } > Message_3 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li className={ styles.item } > Message_4 </li>
            <li className={ styles.item } > Message_5 Lorem, ipsum dolor.</li>
          </ul>
        </Route>
        <Route exact path='/dialogs/id2' >
          <ul className={ styles.list } >
            <li className={ styles.item } > Message_1 Lorem ipsum dolor sit amet.</li>
            <li className={ styles.item } > Message_2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi qui nulla repellendus, beatae ab illum iste doloribus itaque dignissimos blanditiis veritatis quae libero officia accusamus voluptatibus. Ipsum ipsa in vero!</li>
            <li className={ styles.item } > Message_3 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li className={ styles.item } > Message_4 </li>
            <li className={ styles.item } > Message_5 Lorem, ipsum dolor.</li><li className={ styles.item } > Message_1 Lorem ipsum dolor sit amet.</li>
            <li className={ styles.item } > Message_2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi qui nulla repellendus, beatae ab illum iste doloribus itaque dignissimos blanditiis veritatis quae libero officia accusamus voluptatibus. Ipsum ipsa in vero!</li>
            <li className={ styles.item } > Message_3 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li className={ styles.item } > Message_4 </li>
            <li className={ styles.item } > Message_5 Lorem, ipsum dolor.</li><li className={ styles.item } > Message_1 Lorem ipsum dolor sit amet.</li>
            <li className={ styles.item } > Message_2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi qui nulla repellendus, beatae ab illum iste doloribus itaque dignissimos blanditiis veritatis quae libero officia accusamus voluptatibus. Ipsum ipsa in vero!</li>
            <li className={ styles.item } > Message_3 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li className={ styles.item } > Message_4 </li>
            <li className={ styles.item } > Message_5 Lorem, ipsum dolor.</li><li className={ styles.item } > Message_1 Lorem ipsum dolor sit amet.</li>
            <li className={ styles.item } > Message_2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi qui nulla repellendus, beatae ab illum iste doloribus itaque dignissimos blanditiis veritatis quae libero officia accusamus voluptatibus. Ipsum ipsa in vero!</li>
            <li className={ styles.item } > Message_3 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li className={ styles.item } > Message_4 </li>
            <li className={ styles.item } > Message_5 Lorem, ipsum dolor.</li>
          </ul>
        </Route>
        <Route exact path='/dialogs/id3' >
          <ul className={ styles.list } >
            <li className={ styles.item } > Message_1 Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
          </ul>
        </Route>
        <Route path='/dialogs' >
          <div style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '20vmin'
          }}>
            <div>~</div>
          </div>
        </Route>
      </Switch>
    </section>
  );
}

export default Messages;
