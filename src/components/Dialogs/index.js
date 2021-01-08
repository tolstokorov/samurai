import React from "react";
import styles from './index.module.css';
import Messages from './Messages';
import DialogsList from './DialogsList';

const Dialogs = (props) => {
  return (
    <div className={ styles.dialogsPage }>
      <DialogsList dialogs={ props.dialogs } />
      <Messages messages={ props.messages } />
    </div>
  );
}

export default Dialogs;
