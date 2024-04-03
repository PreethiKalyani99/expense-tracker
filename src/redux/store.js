import { configureStore } from "@reduxjs/toolkit";
import expenseTrackerSlice from "./expenseTrackerSlice";

export default configureStore({
    reducer: {
        expenseTracker: expenseTrackerSlice 
    }
})