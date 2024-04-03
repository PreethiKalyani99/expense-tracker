import React from "react";
import { SingleTrasactionHistory } from "./SingleTransactionHistory";
import { useDispatch } from "react-redux";
 
export function TransactionHistory(props){
    const dispatch = useDispatch()

    function deleteTransaction(index){
        const updatedHistory = props.totalTransactionHistory.filter((data, dataIndex) => index !== dataIndex)
        dispatch(props.setTotalTransactionHistory(updatedHistory))
    }

    return (
        <>
            <h3 className="mt-5 history-text fs-5 fw-bold">History</h3>
            <hr className="line"/>
            {props.totalTransactionHistory.length > 0 ? (
                props.totalTransactionHistory.map((transaction, index) => {
                    return <SingleTrasactionHistory
                        key={index}
                        deleteTransaction={() => deleteTransaction(index)}
                        amount={transaction.amount}
                        text={transaction.text}
                    />
                    })
                ) : ''
            }
        </>
    )
}
