import React from "react";

export function AddTransaction(props){
    console.log(props.singleTransactionHistory, 'single data', props.totalTransactionHistory, 'all data')
    function handleInputChange(e){
        const {name, value} = e.target
        props.setSingleTransactionHistory({
            ...props.singleTransactionHistory,
            [name]: value
        })
    }

    function handleTransactionHistory(e){
        e.preventDefault()
        props.setTotalTransactionHistory([...props.totalTransactionHistory, props.singleTransactionHistory])
        props.setSingleTransactionHistory({
            text: '',
            amount: ''
        })
    }
    return (
        <>
           <h3>Add New Transaction</h3>
           <form onSubmit={handleTransactionHistory}>
                <div>
                    <label htmlFor="text-input">Text</label>
                    <input 
                        type="text" 
                        id="text-input" 
                        name="text"
                        value={props.singleTransactionHistory.text} 
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="amount">Amount</label>
                    <div>(negative - expense, positive - income)</div>
                    <input 
                        type="number" 
                        id="amount"
                        name="amount" 
                        value={props.singleTransactionHistory.amount} 
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Add Transaction</button>
            </form> 
        </>
    )
}