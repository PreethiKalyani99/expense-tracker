import React from "react";
import { SingleTrasactionHistory } from "./SingleTransactionHistory";
 
export function TransactionHistory(props){

    return (
        <>
            <h3 className="mt-5 history-text fs-5 fw-bold">History</h3>
            <hr className="line"/>
            {props.totalTransactionHistory.length > 0 ? (
                props.totalTransactionHistory.map((transaction, index) => {
                    return <SingleTrasactionHistory
                        key={index}
                        id={index}
                        amount={transaction.amount}
                        text={transaction.text}
                    />
                    })
                ) : ''
            }
        </>
    )
}
