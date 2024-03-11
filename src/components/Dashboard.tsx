import { Grid, Stack } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import LeftToolbar from './toolbar/LeftToolbar';
import SearchBar from './leftSection/searchBar';
import ChatListSection from './leftSection/chatListSection';
import ChatSection from './rightSection/ChatSection';
import DefaultPage from './rightSection/DefaultPage';

export default function Dashboard() {
    const selectedContact = useSelector((state: any) => state.selectedContact.selectedContact);
    const selectedId = useSelector((state : any) => state.selectedContactId.selectedContactId);

    
    return (
        <>
            <Stack
                direction={"row"}
            >
                <Grid
                    container
                    xs={12} sm={6} md={4} lg={4} xl={3}
                    sx={{
                        height: "100vh",
                        fontFamily: " Segoe UI, Helvetica Neue, Helvetica, Lucida Grande, Arial, Ubuntu, Cantarell, Fira Sans, sans-serif"
                    }}
                >
                    <Stack
                        height={"100%"}
                        width={"100%"}
                    // justifyContent={"space-between"}
                    >
                        <LeftToolbar />
                        <SearchBar />
                        {/* <Outlet /> */}

                        {/* <Link to={`chatlistsection`}> */}
                        <ChatListSection />
                        {/* </Link> */}
                    </Stack>
                </Grid>
                <Grid
                    container
                    xs={12} sm={6} md={8} lg={8} xl={9}
                    sx={{
                        height: "100vh",
                        fontFamily: " Segoe UI, Helvetica Neue, Helvetica, Lucida Grande, Arial, Ubuntu, Cantarell, Fira Sans, sans-serif"
                    }}
                >
                    {/* <Stack
                        height={"100%"}
                        width={"100%"}
                    // justifyContent={"space-between"}
                    > */}
                    {
                        selectedId === 0
                            ?
                            <DefaultPage />
                            :
                            <ChatSection />
                    }
                    {/* </Stack> */}
                </Grid>
            </Stack>
        </>
    )
}
