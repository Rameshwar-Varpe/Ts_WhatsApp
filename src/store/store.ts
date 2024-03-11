import { configureStore } from "@reduxjs/toolkit";
import selectedContactReducer from "../slices/selectedContactSlice";
import chatReducer from '../slices/chatSlice';
import contactsReducer from '../slices/contactSlice';
import selectedContactIdReducer from '../slices/selectedContactId'
// import logger from 'redux-logger';

export default configureStore({
    reducer : {
      selectedContact : selectedContactReducer,
      chats : chatReducer,
      contacts : contactsReducer,
      selectedContactId : selectedContactIdReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) 
})