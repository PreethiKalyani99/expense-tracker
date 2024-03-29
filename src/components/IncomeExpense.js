import React from "react";

export function IncomeExpense(props){
    let expense = 0, income = 0
    props.totalTransactionHistory.forEach(data => {
        let money = parseFloat(data.amount)
        if(money < 0){
            expense += money
        }
        else{
            income += money
        }
    })
    return(
        <>
            <div>
                <span><h4>Income</h4></span>
                <div>Rs.{income}</div>
                <span><h4>Expense</h4></span>
                <div>Rs.{expense.toString().length > 1 ? expense.toString().substring(1) : expense}</div>
            </div>
        </>
    )
}