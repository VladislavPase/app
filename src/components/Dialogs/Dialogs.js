import  React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageText} from "../../state";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>);
    let messageElements = state.messages.map( m => <Message message={m.message}/>);
    let newMessageText = state.newMessageText;

    let onSendMessage = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (e) => {
        let messageText = e.target.value;
        props.store.dispatch(updateNewMessageText(messageText));
    }
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div className={s.messagesWrapper}>
                    {messageElements}
                </div>
                <div className={s.inputMessages}>
                    <textarea placeholder="Input your message here..."
                        onChange={onNewMessageChange} value={newMessageText}>
                    </textarea>
                </div>
                <button onClick={onSendMessage} className={s.btn}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;