import React from "react";
import { AddTransaction } from "./AddTransaction";
import { TransactionHistory } from "./TransactionHistory";
import { IncomeExpense } from "./IncomeExpense";
import { CurrentBalance } from "./CurrentBalance";
import { setTotalTransactionHistory, setSingleTransactionHistory, addTransaction } from "../redux/expenseTrackerSlice";
import { useSelector } from "react-redux";



export function ExpenseTracker(){
    const {singleTransactionHistory, totalTransactionHistory} = useSelector(state => state.expenseTracker)
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
                setTotalTransactionHistory={setTotalTransactionHistory}
            />
            <AddTransaction
                singleTransactionHistory={singleTransactionHistory}
                setSingleTransactionHistory={setSingleTransactionHistory}
                totalTransactionHistory={totalTransactionHistory}
                addTransaction={addTransaction}
            />
        </div>
    )
}