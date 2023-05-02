import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: { user: "", isLogged: false } };

export const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
        logout: (state) => {
            state.value = initialState.value;
        },
    },
});

export const { login, logout } = slice.actions;
export default slice.reducer;