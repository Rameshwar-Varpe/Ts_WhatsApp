import React from 'react';
import { InputBase, Stack, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { UnreadChats } from '../../assects/icons/icons';

function SearchBar() {
  return (
    <Stack
      padding="6.5px 0px 6.5px 12px"
      alignItems="center"
      direction="row"
    >
      <InputBase
        fullWidth
        placeholder="Search or start a new chat"
        id="search-bar"
        sx={{
          backgroundColor: '#F0F2F5',
          borderRadius: '10px',
          // alignContent: 'center',
          // alignItems: 'center',
          padding: "2.5px 24px 3px 4px",
          '& .MuiInputBase-input': {
            fontSize: '14px',
          },
          '& .MuiSvgIcon-root': {
            fontSize: '20px',
          },
        }}
        startAdornment={
          <InputAdornment position="end">
            <IconButton
              sx={{ padding: "0px 30px 0px 2px" }}
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
      />
      <IconButton>
        <UnreadChats />
      </IconButton>
    </Stack>
  );
}

export default SearchBar;