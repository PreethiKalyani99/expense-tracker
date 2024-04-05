import { createSlice } from "@reduxjs/toolkit";

export const expenseTrackerSlice = createSlice({
    name: 'expenseTracker',
    initialState:{
        totalTransactionHistory: []
    },
    reducers: {
        addTransaction: (state, action) => {
            return {
                ...state,
                totalTransactionHistory: [...state.totalTransactionHistory, action.payload]
              }
        },
        deleteTransaction: (state, action) => {
            return {
                ...state,
                totalTransactionHistory: state.totalTransactionHistory.filter((transaction, index) => index !== action.payload)
            }
        }
    }
})

export const {addTransaction, deleteTransaction} = expenseTrackerSlice.actions
export default expenseTrackerSlice.reducer