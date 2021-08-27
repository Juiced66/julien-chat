import {createSlice} from '@reduxjs/toolkit';


const initialState = {
  messages: [
    {
      timestamp : Date.now(),
      value : "Bienvenue chez Subaru, un agent peut répondre a toutes vos interrogations. Ecrivez nous pour lancer le chat !",
      messageType : "information"
    }
  ],
};

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    sendVisitorMessage: (state,action) => {
      state.messages.push(action.payload);
    },
    receiveAgentMessage: (state,action) => {
      state.messages.push(action.payload);
    },
    registerLog: (state, action) => {
      state.messages.push(action.payload);
    },
    registerInformation:(state,action) => {
      state.messages.push(action.payload);
    },
    clearMessages : state => initialState
  },
});

export const { sendVisitorMessage, receiveAgentMessage, registerLog, registerInformation, clearMessages } = messagesSlice.actions;

export default messagesSlice.reducer;
