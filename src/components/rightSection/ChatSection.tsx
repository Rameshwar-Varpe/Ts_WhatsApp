import { Box, IconButton, InputBase, Stack } from '@mui/material';
import React, { useState } from 'react'
import RightToolbar from '../toolbar/RightToolbar';
import { PlusIcon, SendIcon, SmilyIcon, VoiceIcon } from '../../assects/icons/icons';
import bgImage from '../../assects/images/bg_whatsapp_chat.png'
import { Outlet } from 'react-router-dom';

export default function ChatSection() {
    const [sendOption, setSendOption] = useState(false);
    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const rotation = useRef(0);

    // const handleRotateClick = () => {
    //     const newRotation = rotation.current === 0 ? 135 : 0;
    //     rotation.current = newRotation
    // };

    // const handlePlusClick = () => {
    //     handleRotateClick()
    //     setIsModalOpen(true);
    // }

    

    return (
        <>
            <Stack
                justifyContent={"space-between"}
                height={"inherit"}
                width={"inherit"}
                fontFamily={"inherit"}
            >
                <Outlet />
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

                            <IconButton
                                // onClick={handlePlusClick}
                                // sx={{
                                //     transform: `rotate(${rotation.current}deg)`,
                                //     transition: 'transform 0.4s ease',
                                //     padding: "8px",
                                //     borderRadius: "50%",
                                //     bgcolor: rotation.current == 135 ? "#374248" : "#54656f"

                                // }}
                            >
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
