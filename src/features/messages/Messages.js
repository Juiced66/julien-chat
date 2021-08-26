import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  sendVisitorMessage,
  receiveAgentMessage,
  registerLog,
  registerInformation,
  selectMessages
} from './messagesSlice';
import styles from './Messages.module.css';

export function Messages() {
  // const messages = useSelector(selectMessages);
  // const dispatch = useDispatch();


  return (
    <div>

    </div>
  );
}
