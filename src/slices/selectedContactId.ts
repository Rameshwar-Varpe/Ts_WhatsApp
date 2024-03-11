import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  selectedContactId: number;
}

const initialState: AppState = {
  selectedContactId: 0,
};

const selectedContactIdSlice = createSlice({
  name: 'id',
  initialState,
  reducers: {
    setSelectedContactId: (state, action: PayloadAction<number>) => {
      // console.log("first", action.payload)
      state.selectedContactId = action.payload;
    },
  },
});

export const { setSelectedContactId } = selectedContactIdSlice.actions;

export default selectedContactIdSlice.reducer;
