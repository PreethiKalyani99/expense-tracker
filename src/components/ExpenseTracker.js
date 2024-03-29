import React, {useState} from "react";
import { AddTransaction } from "./AddTransaction";
import { TransactionHistory } from "./TransactionHistory";
import { IncomeExpense } from "./IncomeExpense";
import { CurrentBalance } from "./CurrentBalance";


export function ExpenseTracker(){
    const [singleTransactionHistory, setSingleTransactionHistory] = useState({
        text: '',
        amount: ''
    })
    const [totalTransactionHistory, setTotalTransactionHistory] = useState([])
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
                setTotalTransactionHistory={setTotalTransactionHistory}
            />
        </div>
    )
}