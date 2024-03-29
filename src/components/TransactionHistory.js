import React from "react";

export function TransactionHistory(props){
    function deleteTransaction(index){
        const updatedHistory = props.totalTransactionHistory.filter((data, dataIndex) => index !== dataIndex)
        props.setTotalTransactionHistory(updatedHistory)
    }

    function handleMouseover(id){
        const updatedHistory = props.totalTransactionHistory.map((data, index) => {
            if (id === index) {
                return { ...data, isHover: true }
            }
            return data
        })
        props.setTotalTransactionHistory(updatedHistory)
    }

    function handleMouseLeave(id){
        const updatedHistory = props.totalTransactionHistory.map((data, index) => {
            if (id === index) {
                return { ...data, isHover: false }
            }
            return data
        })
        props.setTotalTransactionHistory(updatedHistory)
    }
    return (
        <>
            <h3 className="mt-5 history-text fs-5 fw-bold">History</h3>
            <hr className="line"/>
                {props.totalTransactionHistory.length > 0 ? (
                    props.totalTransactionHistory.map((transaction, index) => (
                        <div  key={index} className={` mb-2 delete-position`} onMouseOver={() => handleMouseover(index)} onMouseLeave={() => handleMouseLeave(index)}>
                            <button onClick={() => deleteTransaction(index)} className={`ms-3 delete-button ${transaction.isHover ? 'visible' : 'hidden'}`}>X</button>
                            <div className={transaction.amount < 0 ? "transaction-container red" : 'transaction-container green'}>
                                <span className="text">{transaction.text}</span>
                                <span className="amount">{transaction.amount}</span>
                            </div>
                        </div>
                    ))
                ) : ''
            }
        </>
    )
}