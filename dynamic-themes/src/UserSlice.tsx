import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    username: string;
    phone: string;
    website: string;
  }

  const initialState: UserState = {
    username: 'Aris',
    phone: '00000',
    website: 'link',
  };

  export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      setUser: (state, action: PayloadAction<UserState>) => {
        state.username = action.payload.username;
        state.phone = action.payload.phone;
        state.website = action.payload.website;
      },
    },
  });

  export const { setUser } = userSlice.actions;

export default userSlice.reducer;