import movieSlice from "./movieSlice";

const { configureStore } = require("@reduxjs/toolkit");
const { default: userSlice } = require("./userSlice");


const appStore = configureStore({
    reducer: {
        user: userSlice,
        movies: movieSlice
    }
})

export default appStore;