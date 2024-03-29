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
        <>
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
        </>
    )
}