import React, {useState} from "react";

export function SingleTrasactionHistory(props){

    const [isHover, setIsHover] = useState(false)
    return(
        <>
            <div className={` mb-2 delete-position`} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} >
                <button onClick={() => props.deleteTransaction(props.index)} className={`delete-button ${isHover ? 'visible' : 'hidden'}`}>X</button>
                <div className={props.amount < 0 ? "transaction-container red" : 'transaction-container green'} data-testid="transaction-container">
                    <span className="text">{props.text}</span>
                    <span className="amount">{props.amount}</span>
                </div>
            </div>
        </>
    )
}