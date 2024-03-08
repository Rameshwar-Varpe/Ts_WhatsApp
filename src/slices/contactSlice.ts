import { createSlice } from "@reduxjs/toolkit";


interface contactsObject {
    id:number;
    name:string;
    mobile:number;
    lastChat:string;
    lastActive :string;
    profile :string
}

interface contactsState{
    contacts : contactsObject[];
}

const initialState: contactsState = {
    contacts: [
        { id: 1, name: 'Pratiksha Shinde', mobile: 9324102653, lastChat: 'Today', lastActive: "Online", profile: 'https://pps.whatsapp.net/v/t61.24694-24/328739635_892854521966044_2603007389348596863_n.jpg?ccb=11-4&oh=01_AdTP_yNtyUJRK2eJpWNN22n7hXZX7EzQWC0OySG2mkeFaA&oe=65F1286E&_nc_sid=e6ed6c&_nc_cat=107' },
        { id: 2, name: 'Ashutosh Verulkar', mobile: 721872495, lastChat: "yesterday", lastActive: "last seen today at 6:08 am", profile: '', },
        { id: 3, name: 'Shubham Thorat', mobile: 9579599178, lastChat: 'Saturday', lastActive: "last seen today at 4:08 am", profile: 'https://pps.whatsapp.net/v/t61.24694-24/377989196_820983789709675_4695400949932798501_n.jpg?ccb=11-4&oh=01_AdTJwnmXBw7UVrK6E2rSIZQE-kUDTWNcmhq-E7M5A6hJ3Q&oe=65F12D9E&_nc_sid=e6ed6c&_nc_cat=102' },
        { id: 4, name: 'Omkar', mobile: 7843039075, lastChat: 'Friday', lastActive: "last seen yesterday at 10:27 pm", profile: 'https://media-bom1-2.cdn.whatsapp.net/v/t61.24694-24/424446228_1506336720231464_4928847597075419266_n.jpg?ccb=11-4&oh=01_AdTmU3fniOjOnCpWRuLIi7HLtepG1TypVoNzdnEtLW5Lig&oe=65F8131B&_nc_sid=e6ed6c&_nc_cat=108' },
        { id: 5, name: 'Rutik Dube', mobile: 9422063173, lastChat: '14/02/20024', lastActive: "last seen today at 8:00 pm", profile: 'https://media-bom1-2.cdn.whatsapp.net/v/t61.24694-24/427190000_381526074670009_5048072021767580241_n.jpg?ccb=11-4&oh=01_AdQqDenaBYKABsurzCqPdCgMApK_1UEsBkfiq4TEUGq8jQ&oe=65F818B2&_nc_sid=e6ed6c&_nc_cat=109' },
        { id: 6, name: 'Rohit Navale', mobile: 8483005153, lastChat: '25/01/2002', lastActive: "Online", profile: 'https://pps.whatsapp.net/v/t61.24694-24/424425344_776118247701858_2485486084677294843_n.jpg?ccb=11-4&oh=01_AdQiyq1jFNoifNt44JJ4efBr8QAwdL3U7goVN2WOKtUzWA&oe=65F12D64&_nc_sid=e6ed6c&_nc_cat=100' },
        { id: 7, name: 'Sachin Dethe', mobile: 9322755952, lastChat: '01/01/2024', lastActive: "", profile: 'https://media-maa2-2.cdn.whatsapp.net/v/t61.24694-24/422251560_2582099215283560_1271321001017426075_n.jpg?ccb=11-4&oh=01_AdS-xOWa_n5KK9RQ-IkTm8blebMmad3IvGQpzVRPENGwHg&oe=65F1553B&_nc_sid=e6ed6c&_nc_cat=103' }
    ]
}

const contactSlice = createSlice({
    name:'contacts',
    initialState,
    reducers:{
        setContacts:(state,action) =>{
            state.contacts = action.payload;
        }
    }
})

export const {setContacts} = contactSlice.actions;

export default contactSlice.reducer;