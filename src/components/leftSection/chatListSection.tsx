import React from 'react';
import { Avatar, Box, Divider, Grid, Typography, Stack, Button, Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedContact } from '../../slices/selectedContactSlice';

interface Contact {
    name: string;
    mobile: string;
    profile: string;
    lastChat: string;
}

interface ChatState {
    chats: {
        chats: Array<Chat>;
    }
}

interface ContactState {
    contacts: {
        contacts: Array<Contact>
    }
}

// interface contact {
//     id: number;
//     name: string;
//     mobile: number;
//     lastChat: string;
//     lastActive: string;
//     profile: string
// }

interface Chat {
    mobile: string;
    content: string;
}

function ChatListSection() {
    const dispatch = useDispatch();
    const chats = useSelector((state: ChatState) => state.chats.chats);
    const contacts = useSelector((state: ContactState) => state.contacts.contacts);

    const handleButtonClick = (contact: Contact) => {
        dispatch(setSelectedContact(contact));
    };

    return (
        <Paper
            sx={{
                overflowY: "auto",
                scrollbarWidth: "thin",
            }}
        >
            {contacts.map((contact, index) => (
                <Button
                    key={index}
                    fullWidth
                    onClick={() => handleButtonClick(contact)}
                    sx={{
                        textAlign: "left",
                        padding: "0",
                        "&:hover": {
                            backgroundColor: "transparent",
                        },
                    }}
                >
                    <Stack width={"inherit"}>
                        <Grid
                            container
                            key={index}
                            width="inherit"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Stack direction="row" alignItems="center">
                                <Box padding="12px 15px 12px 13px">
                                    <Avatar
                                        key={index}
                                        alt="profile picture"
                                        src={contact.profile}
                                        sx={{ height: "49px", width: "49px" }}
                                    />
                                </Box>

                                <Grid padding="0 15px 0 0">
                                    <Typography
                                        fontSize="17px"
                                        color="#111B21"
                                        fontFamily={"inherit"}
                                        sx={{ textTransform: "none" }}
                                    >
                                        {contact.name}
                                    </Typography>
                                    <Typography
                                        fontFamily={"inherit"}
                                        fontSize="14px"
                                        color="#667781"
                                        sx={{
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            whiteSpace: "nowrap",
                                            maxWidth: "100%",
                                            textTransform: "none",
                                        }}
                                    >
                                        {chats.find((chat) => chat.mobile === contact.mobile)?.content || ""}
                                    </Typography>
                                </Grid>
                            </Stack>
                            <Stack padding={"0 15px 0 0"}>
                                <Typography
                                    color={"#667781"}
                                    fontFamily={"inherit"}
                                    fontSize={"12px"}
                                    sx={{ textTransform: "none" }}
                                >
                                    {contact.lastChat}
                                </Typography>

                                <Typography>{ }</Typography>
                            </Stack>
                        </Grid>
                        <Box paddingRight={"15px"}>
                            <Divider variant="inset" />
                        </Box>
                    </Stack>
                </Button>
            ))}
        </Paper>
    );
}

export default ChatListSection;