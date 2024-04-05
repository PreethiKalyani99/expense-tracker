import { createSlice } from "@reduxjs/toolkit";

export const expenseTrackerSlice = createSlice({
    name: 'expenseTracker',
    initialState:{
        totalTransactionHistory: JSON.parse(localStorage.getItem('transaction')) || []
    },
    reducers: {
        addTransaction: (state, action) => {
            state.totalTransactionHistory.push(action.payload)
            localStorage.setItem('transaction', JSON.stringify(state.totalTransactionHistory))
        },
        deleteTransaction: (state, action) => {
            state.totalTransactionHistory = state.totalTransactionHistory.filter((transaction, index) => index !== action.payload)
            localStorage.setItem('transaction', JSON.stringify(state.totalTransactionHistory))
        }
    }
})

export const {addTransaction, deleteTransaction} = expenseTrackerSlice.actions
export default expenseTrackerSlice.reducer