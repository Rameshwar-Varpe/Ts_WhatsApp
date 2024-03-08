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
                <>
                    <Stack
                        key={index}
                        onClick={() => handleButtonClick(contact)}
                        sx={{
                            width: "inherit",
                            textAlign: "left",
                            padding: "0",
                            "&:hover": {
                                backgroundColor: "transparent",
                            },
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexDirection: "row"
                        }}
                    >
                        <Stack direction="row" alignItems="center" overflow={"hidden"}  >
                            <Box padding="12px 15px 12px 13px">
                                <Avatar
                                    key={index}
                                    alt="profile picture"
                                    src={contact.profile}
                                    sx={{ height: "49px", width: "49px" }}
                                />
                            </Box>

                            <Box padding="0 15px 0 0" overflow={'inherit'}>
                                <Typography
                                    fontSize="17px"
                                    color="#111B21"
                                    fontFamily={"inherit"}
                                    sx={{
                                        overflow: 'inherit',
                                        textOverflow: 'ellipsis',
                                        display: '-webkit-box',
                                        WebkitLineClamp: '1',
                                        WebkitBoxOrient: 'vertical'

                                        // overflowX:'hidden',
                                        // overflowY:'hidden',
                                        // display:'inline-block',
                                        // textOverflow:'ellipsis',
                                        // whiteSpace:'nowrap'
                                    }}
                                >
                                    {contact.name}
                                </Typography>
                                <Typography
                                    fontFamily={"inherit"}
                                    fontSize="14px"
                                    color="#667781"
                                    sx={{
                                        overflow: "inherit",
                                        textOverflow: "ellipsis",
                                        display: '-webkit-box',
                                        WebkitLineClamp: '1',
                                        WebkitBoxOrient: 'vertical'
                                    }}
                                >
                                    {chats.find((chat) => chat.mobile === contact.mobile)?.content || ""}
                                </Typography>
                            </Box>
                        </Stack>
                        <Stack padding={"0 15px 0 0"}>
                            <Typography
                                color={"#667781"}
                                fontFamily={"inherit"}
                                fontSize={"12px"}
                                sx={{
                                    textAlign: "end"
                                }}
                            >
                                {contact.lastChat}
                            </Typography>
                            <Typography
                                color={"#667781"}
                                fontFamily={"inherit"}
                                fontSize={"12px"}
                                sx={{
                                    textAlign: "end"
                                }}
                            >8</Typography>
                        </Stack>
                    </Stack>
                    <Divider variant="inset" />
                </>
            ))}
        </Paper>
    );
}

export default ChatListSection;