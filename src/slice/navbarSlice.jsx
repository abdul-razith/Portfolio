import { createSlice } from "@reduxjs/toolkit";


const initialState = {theme : "dark", toggleMenu : false}

const navbarSlice = createSlice({
    name: 'navbar',
    initialState,
    reducers : {
        toggle : (state, action) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        },

        menuToggle : (state, action) =>{
            state.toggleMenu = !state.toggleMenu;
        }
    }
});

export const {toggle, menuToggle} = navbarSlice.actions;
export default navbarSlice.reducer;