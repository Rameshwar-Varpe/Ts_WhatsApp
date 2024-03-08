import { configureStore } from "@reduxjs/toolkit";
import selectedContactReducer from "../slices/selectedContactSlice";
import chatReducer from '../slices/chatSlice';
import contactsReducer from '../slices/contactSlice';
// import logger from 'redux-logger';

export default configureStore({
    reducer : {
      selectedContact : selectedContactReducer,
      chats : chatReducer,
      contacts : contactsReducer
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) 
})