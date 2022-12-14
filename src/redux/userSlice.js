import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: {},
    cart: [],
    favourites: [],
    authorized: false,
    error: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            const { email, password } = state.userInfo;
            if (
                action.payload.email === email &&
                action.payload.password === password
            )
                state.authorized = true;
        },
        register: (state, action) => {
            state.userInfo = action.payload;
            state.authorized = true;
        },
        logout: (state) => {
            state.authorized = false;
        },

        saveToFavourites: (state, action) => {
            const index = state.favourites.findIndex(
                (favourite) => favourite.id === action.payload.id
            );
            if (index === -1) {
                state.favourites.push(action.payload);
            } else {
                state.favourites = state.favourites.filter(
                    (favourite) => favourite.id !== action.payload.id
                );
            }
        },
    },
});

export const { login, register, authorization, logout, saveToFavourites } =
    userSlice.actions;

export default userSlice.reducer;
