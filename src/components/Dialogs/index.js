import React from "react";
import styles from './index.module.css';
import Messages from './Messages';
import DialogsList from './DialogsList';


function Dialogs() {
  return (
    <div className={ styles.dialogsPage }>
      <DialogsList />
      <Messages />
    </div>
  );
}

export default Dialogs;
