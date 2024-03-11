import { createSlice } from "@reduxjs/toolkit";


interface contactsObject {
    id:number;
    name:string;
    mobile:number;
    lastChat:string;
    lastActive :string;
    profile :string;
    unreadChats ?: number;
}

interface contactsState{
    contacts : contactsObject[];
}

const initialState: contactsState = {
    contacts: [
        { id: 1, name: 'Pratiksha Shinde', mobile: 9324102653, lastChat: 'Today', lastActive: "Online", unreadChats: 5, profile: 'https://pps.whatsapp.net/v/t61.24694-24/328739635_892854521966044_2603007389348596863_n.jpg?ccb=11-4&oh=01_AdTP_yNtyUJRK2eJpWNN22n7hXZX7EzQWC0OySG2mkeFaA&oe=65F1286E&_nc_sid=e6ed6c&_nc_cat=107' },
        { id: 2, name: 'Ashutosh Verulkar', mobile: 721872495, lastChat: "yesterday", lastActive: "last seen today at 6:08 am", unreadChats: 7, profile: '', },
        { id: 3, name: 'Shubham Thorat', mobile: 9579599178, lastChat: 'Saturday', lastActive: "last seen today at 4:08 am", unreadChats: 2, profile: 'https://pps.whatsapp.net/v/t61.24694-24/377989196_820983789709675_4695400949932798501_n.jpg?ccb=11-4&oh=01_AdTJwnmXBw7UVrK6E2rSIZQE-kUDTWNcmhq-E7M5A6hJ3Q&oe=65F12D9E&_nc_sid=e6ed6c&_nc_cat=102' },
        { id: 4, name: 'Omkar', mobile: 7843039075, lastChat: 'Friday', lastActive: "last seen yesterday at 10:27 pm", unreadChats: 7, profile: 'https://media-bom1-2.cdn.whatsapp.net/v/t61.24694-24/424446228_1506336720231464_4928847597075419266_n.jpg?ccb=11-4&oh=01_AdTmU3fniOjOnCpWRuLIi7HLtepG1TypVoNzdnEtLW5Lig&oe=65F8131B&_nc_sid=e6ed6c&_nc_cat=108' },
        { id: 5, name: 'Rutik Dube', mobile: 9422063173, lastChat: '29/02/2024', lastActive: "last seen today at 8:00 pm", unreadChats: 6, profile: 'https://media-bom1-2.cdn.whatsapp.net/v/t61.24694-24/427190000_381526074670009_5048072021767580241_n.jpg?ccb=11-4&oh=01_AdQqDenaBYKABsurzCqPdCgMApK_1UEsBkfiq4TEUGq8jQ&oe=65F818B2&_nc_sid=e6ed6c&_nc_cat=109' },
        { id: 6, name: 'Rohit Navale', mobile: 8483005153, lastChat: '17/02/2024', lastActive: "Online", profile: 'https://pps.whatsapp.net/v/t61.24694-24/424425344_776118247701858_2485486084677294843_n.jpg?ccb=11-4&oh=01_AdQiyq1jFNoifNt44JJ4efBr8QAwdL3U7goVN2WOKtUzWA&oe=65F12D64&_nc_sid=e6ed6c&_nc_cat=100' },
        { id: 7, name: 'Sagar Varpe', mobile: 9145010354, lastChat: '17/02/2024', lastActive: "yesterday 12:34 pm", profile: 'https://pps.whatsapp.net/v/t61.24694-24/424424973_446408727719625_626085878760099436_n.jpg?ccb=11-4&oh=01_AdRQnYzfgzMVIxPLHF7u14XCwRHbboDWSWjOYTasglAuPg&oe=65F85937&_nc_sid=e6ed6c&_nc_cat=105' },
        { id: 8, name: 'Tejas Kshirsagar', mobile: 7038882133, lastChat: "14/02/20024", lastActive: "last seen today at 9:43 am", profile: 'https://pps.whatsapp.net/v/t61.24694-24/427314102_3018463664953437_4995442553189151330_n.jpg?ccb=11-4&oh=01_AdR_iCQqdIeMIQ5Kvy8_2-dRZMTpvqM-IcGwDrjUelU50w&oe=65F261AD&_nc_sid=e6ed6c&_nc_cat=110', },
        { id: 9, name: 'Abhishek Varpe', mobile: 788072095, lastChat: "25/01/2002", lastActive: "3:40 pm", profile: 'https://media-maa2-2.cdn.whatsapp.net/v/t61.24694-24/415101772_947133666978692_8828957643273558945_n.jpg?ccb=11-4&oh=01_AdStkLVv8pXriIy3j3uOxD1gsBe-MGfqfuTJdCEs6AWkNg&oe=65F9244F&_nc_sid=e6ed6c&_nc_cat=101', }
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
