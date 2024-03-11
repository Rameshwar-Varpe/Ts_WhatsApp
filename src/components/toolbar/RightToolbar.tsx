import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material';
import { ChatSearchIcon, DefaultMenuIcon, VideoCallDropDownIcon, VideoCallIcon } from '../../assects/icons/icons';
import { useSelector } from 'react-redux';

export default function RightToolbar() {
    const selectedId = useSelector((state : any) => state.selectedContactId.selectedContactId);
    
    const contacts = useSelector((state : any) => state.contacts.contacts)  
    const sContact = contacts.find((contact : any) => contact.id === selectedId);
    
    
    
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            bgcolor="#f0f2f5"
            borderLeft="0.5px solid #d1d7db"
        // width={"80px"}
        >
            <Stack direction="row" alignItems="center">
                <Box sx={{ padding: "10px 16px" }}>
                    <Avatar alt="Contact Icon" src={sContact.profile} />
                </Box>
                <Box
                // width={"inherit"}
                >
                    <Typography color="#111b21" fontSize="16px" fontFamily="inherit"
                        sx={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: "1",
                            WebkitBoxOrient: "vertical",
                        }}
                    >
                        {sContact.name}
                    </Typography>
                    <Typography
                        color="#667781"
                        fontSize="13px"
                        fontFamily="inherit"
                        sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: "1",
                            WebkitBoxOrient: 'vertical'
                        }}
                    >
                        {sContact.lastActive}
                    </Typography>
                </Box>
            </Stack>
            <Stack direction="row">
                <IconButton
                    sx={{
                        borderRadius: "20px"
                    }}
                >
                    <Stack
                        direction="row"
                        // padding="0 14px 0 14px"
                        padding="6px 10px"
                        // alignItems="center"
                    >
                        <Box
                            display="flex"
                        >
                            <Box>
                                <VideoCallIcon />
                            </Box>
                            <Box padding="0 0 0 8px">
                                <VideoCallDropDownIcon />
                            </Box>
                        </Box>
                    </Stack>
                </IconButton>
                <Box padding="6px 10px">
                    <IconButton>
                        <ChatSearchIcon />
                    </IconButton>
                </Box>
                <Box padding="6px 20px 6px 10px">
                    <IconButton>
                        <DefaultMenuIcon />
                    </IconButton>
                </Box>
            </Stack>
        </Stack>
    );
}