import React from "react";

export function TransactionHistory(props){
    function deleteTransaction(id){
        const updatedHistory = props.totalTransactionHistory.filter((data, index) => id !== index)
        props.setTotalTransactionHistory(updatedHistory)
    }
    return (
        <>
            <h3>History</h3>
                {props.totalTransactionHistory.length > 0 ? (
                    props.totalTransactionHistory.map((transaction, index) => (
                        <div key={index}>
                            <button onClick={() => deleteTransaction(index)}>delete</button>
                            <span>{transaction.text}</span>
                            <span>{transaction.amount}</span>
                        </div>
                    ))
                ) : ''}
        </>
    )
}