import { Box, Stack } from '@mui/material'
import React from 'react'
import { ChannelsIcon, CommunitiesIcon, DefaultUserIcon, MenuIcon, NewChatIcon, StatusIcon } from '../../assects/icons/icons'

export default function LeftToolbar() {
    return (
        <>
            <Stack
                direction={"row"}
                justifyContent="space-between"
                alignItems={"center"}
                bgcolor={"#f0f2f5"}
                padding={"10px 16px"}
            >
                <DefaultUserIcon heightt={40} widthh={40} colorr1={"#dfe5e7"} colorr2={"#ffffff"} />
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={3}
                >
                    <Box>
                        <CommunitiesIcon heightt={24} widthh={24} />
                    </Box>
                    <Box>
                        <StatusIcon heightt={24} widthh={24} />
                    </Box>
                    <Box>
                        <ChannelsIcon heightt={24} widthh={24} />
                    </Box>
                    <Box>
                        <NewChatIcon heightt={24} widthh={24} />
                    </Box>
                    <Box>
                        <MenuIcon heightt={24} widthh={24} />
                    </Box>
                </Stack>
            </Stack>
        </>
    )
}
