import { createSlice } from "@reduxjs/toolkit";

export const expenseTrackerSlice = createSlice({
    name: 'expenseTracker',
    initialState:{
         singleTransactionHistory: {
            text: '',
            amount: ''
        },
        totalTransactionHistory: JSON.parse(localStorage.getItem('foo')) || []
    },
    reducers: {
        addTransaction: (state, action) => {
            state.totalTransactionHistory.push(action.payload)
            localStorage.setItem('foo', JSON.stringify(state.totalTransactionHistory))
        },
        setSingleTransactionHistory: (state, action) => {
            state.singleTransactionHistory = action.payload
        },
        setTotalTransactionHistory: (state, action) => {
            state.totalTransactionHistory = action.payload
            localStorage.setItem('foo', JSON.stringify(state.totalTransactionHistory))
        }
    }
})

export const {addTransaction, setSingleTransactionHistory, setTotalTransactionHistory} = expenseTrackerSlice.actions
export default expenseTrackerSlice.reducer