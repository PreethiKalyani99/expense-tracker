import React, {useState} from "react";

export function SingleTrasactionHistory(props){
    const [isHover, setIsHover] = useState(false)
    return(
        <>
            <div  key={props.index} className={` mb-2 delete-position`} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                <button onClick={() => props.deleteTransaction(props.index)} className={`ms-3 delete-button ${isHover ? 'visible' : 'hidden'}`}>X</button>
                <div className={props.amount < 0 ? "transaction-container red" : 'transaction-container green'}>
                    <span className="text">{props.text}</span>
                    <span className="amount">{props.amount}</span>
                </div>
            </div>
        </>
    )
}