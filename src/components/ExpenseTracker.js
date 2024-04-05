import React from "react";
import { AddTransaction } from "./AddTransaction";
import { TransactionHistory } from "./TransactionHistory";
import { IncomeExpense } from "./IncomeExpense";
import { CurrentBalance } from "./CurrentBalance";
import { addTransaction } from "../redux/expenseTrackerSlice";
import { useSelector } from "react-redux";



export function ExpenseTracker(){
    const { totalTransactionHistory} = useSelector(state => state.expenseTracker)
    return (
        <div className="parent-container">
            <h1 className="title">Expense Tracker</h1>
            <CurrentBalance
                totalTransactionHistory={totalTransactionHistory}
            />
            <IncomeExpense
                totalTransactionHistory={totalTransactionHistory}
            />
            <TransactionHistory 
                totalTransactionHistory={totalTransactionHistory}
            />
            <AddTransaction
                totalTransactionHistory={totalTransactionHistory}
                addTransaction={addTransaction}
            />
        </div>
    )
}