import React, { useState } from 'react';
import { Avatar, Box, Divider, Typography, Stack, Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { VideoCallDropDownIcon } from '../../assects/icons/icons';
import { setSelectedContactId } from '../../slices/selectedContactId';
import { useNavigate } from 'react-router';

interface Contact {
    id?: number;
    name: string;
    mobile: string;
    profile: string;
    lastChat: string;
    unreadChats?: number;
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

interface Chat {
    mobile: string;
    content: string;
}


function ChatListSection() {
    const dispatch = useDispatch();
    const chats = useSelector((state: ChatState) => state.chats.chats);

    const contacts = useSelector((state: ContactState) => state.contacts.contacts);
    const [handleMouseHoverContact, sethandleMouseHoverContact] = useState<Contact | null>(null);
    const navigate = useNavigate();

    const handleButtonClick = (id: any) => {
        dispatch(setSelectedContactId(id));
        navigate(`/chatSection/${id}`,{state: {name : 'Rameshwar'}});
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
                        onClick={() => handleButtonClick(contact.id)}
                        onMouseOver={() => sethandleMouseHoverContact(contact)}
                        onMouseOut={() => sethandleMouseHoverContact(null)}
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
                                        // lineClamp: 1

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

                                        // overflow: 'hidden',
                                        // textOverflow: 'ellipsis',
                                        // display: 'grid',
                                        // gridTemplateRows: 'auto',
                                        // lineClamp: '1'
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
                            <Stack
                                direction={"row"}
                                alignItems={"center"}
                            >
                                <Typography
                                    color={"#667781"}
                                    fontFamily={"inherit"}
                                    fontSize={"12px"}
                                    marginTop={"3px"}
                                    sx={{
                                        // textAlign: "end",
                                        backgroundColor: contact.unreadChats ? "#25d366" : "inherit",
                                        borderRadius: "50%",
                                        width: "20px",
                                        height: "20px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        color: "#FFFFFF",
                                        marginLeft: "auto",
                                        marginRight: handleMouseHoverContact === contact ? "3px" : "0px"
                                    }}
                                >{contact.unreadChats}</Typography>
                                {
                                    handleMouseHoverContact === contact ? <VideoCallDropDownIcon /> : <></>
                                }
                            </Stack>
                        </Stack>
                    </Stack>
                    <Divider variant="inset" />
                </>
            ))}
        </Paper>
    );
}

export default ChatListSection;