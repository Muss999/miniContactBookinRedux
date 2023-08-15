import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contactBookSlice";

export default configureStore({
    reducer: {
        contacts: contactReducer,
    },
});
