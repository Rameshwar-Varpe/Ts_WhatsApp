import { Box, IconButton, InputBase, Stack } from '@mui/material';
import React, { useState } from 'react'
import RightToolbar from '../toolbar/RightToolbar';
import { PlusIcon, SendIcon, SmilyIcon, VoiceIcon } from '../../assects/icons/icons';
import bgImage from '../../assects/images/bg_whatsapp_chat.png'
import { useSelector } from 'react-redux';

export default function ChatSection() {
    const [sendOption, setSendOption] = useState(false);
    const selectedId = useSelector((state : any) => state.selectedContactId.selectedContactId);

    // useEffect(() => {
    //  console.log("useEffect", selectedId)
    // }, [selectedId])
    
    
    return (
        <>
            <Stack
                justifyContent={"space-between"}
                height={"inherit"}
                width={"inherit"}
                fontFamily={"inherit"}
            >
                {/* <Outlet /> */}
                <RightToolbar />
                <Stack
                    sx={{
                        backgroundImage: `url(${bgImage})`,
                        height: "100%",
                        bgcolor: "#efeae2",
                    }}
                >

                </Stack>

                <Stack
                    direction={"row"}
                    bgcolor={"#F0F2F5"}
                    alignItems={"center"}
                    padding={"5px 16px"}
                // justifyContent={"space-between"}
                >
                    <Stack
                        padding={"5px 0"}
                        direction={"row"}
                        alignItems={"inherit"}
                    >
                        <Box
                            margin={"0 8px"}
                        >
                            <SmilyIcon />
                        </Box>
                        <Box
                            margin={"0 8px"}
                        >

                            <IconButton>
                                <PlusIcon />
                            </IconButton>
                        </Box>
                    </Stack>

                    <InputBase
                        placeholder='Type a message'
                        sx={{
                            backgroundColor: "#FFFFFF",
                            fontFamily: "inherit",
                            borderRadius: "10px",
                            padding: "5px 12px",
                            margin: "5px 8px",
                        }}
                        fullWidth
                        onChange={() => setSendOption(true)}
                    />
                    <Box
                        margin={"0 10px 0 15px"}
                    >
                        {
                            sendOption
                                ?
                                <SendIcon />
                                :
                                <VoiceIcon />
                        }

                    </Box>
                </Stack>
            </Stack>
        </>
    )
}
