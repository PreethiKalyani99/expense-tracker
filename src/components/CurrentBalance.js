import React from "react";

export function CurrentBalance(props){
    let availableBalance = props.totalTransactionHistory.reduce((acc,cur) => {
        let money = parseFloat(cur.amount)
        acc += money
        return acc
    }, 0)

    return (
        <>
            <h3>Your Balance</h3>
            <div>Rs.{availableBalance}</div>
        </>
    )
}