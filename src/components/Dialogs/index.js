import React from "react";
import styles from './index.module.css';
import Messages from './Messages';
import DialogsList from './DialogsList';
import { connect } from "react-redux";
import { addMessage, setTmpText } from '../../bll/reducers/dialogs-reducer'

const Dialogs = (props) => {
  return (
    <div className={ styles.dialogsPage }>
      <DialogsList
        dialogs={ props.dialogs } />
      <Messages
        ownerId={ props.ownerId }
        routers={ props.routers }

        setTmpText={ props.setTmpText }
        addMessage={ props.addMessage }
        />
    </div>
  );
}

const mapStateToProps = state => ({
  dialogs: state.dialogsReducer.dialogs,
  ownerId: state.dialogsReducer.owner.id,
  routers: state.dialogsReducer.routers
});

const mapDispatchToProps = dispatch => ({
  addMessage: (routeId) => dispatch(addMessage(routeId)),
  setTmpText: (routeId, text) => dispatch(setTmpText(routeId, text))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);
