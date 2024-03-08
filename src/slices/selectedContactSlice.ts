import { createSlice } from "@reduxjs/toolkit"


export interface contactObject {
    id?: number;
    name?: string;
    mobile?: number;
    lastChat?: string;
    lastActive?: string;
    profile?: string
}

export interface initialStateObject {
    selectedContact?: contactObject
}

const initialState: initialStateObject = {
    selectedContact: {}
}

const selectedContactSlice = createSlice({
    name: 'selectedContact',
    initialState,
    reducers: {
        setSelectedContact: (state, action) => {
            state.selectedContact = action.payload
            // console.log("selectedContact", current(state))
        }
    }
})

export const { setSelectedContact } = selectedContactSlice.actions;

export default selectedContactSlice.reducer;