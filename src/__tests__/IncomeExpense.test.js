import { screen, render } from "@testing-library/react";
import { IncomeExpense } from "../components/IncomeExpense";

test('Check if the income and expense amount are correct', () => {
    const data = [
        {text: 'income', amount: '10000'},
        {text: 'rent', amount: '-5000'},
        {text: 'movie ticket', amount: '-200'},
        {text: 'profit', amount: '100'}
    ]
    render(
        <IncomeExpense
            totalTransactionHistory={data}
        />
    )

    expect(screen.getByText('Rs.10100')).toBeInTheDocument()
    expect(screen.getByText('Rs.5200')).toBeInTheDocument()
})