import { screen, render } from "@testing-library/react";
import { SingleTrasactionHistory } from "../components/SingleTransactionHistory";


test('Check if the amount(positive) and text displayed in the screen correctly', () => {
    render(
        <SingleTrasactionHistory
            key={0}
            deleteTransaction={jest.fn()}
            text="Income"
            amount={30000}
        />
    )
    expect(screen.getByText('Income')).toBeInTheDocument()
    expect(screen.getByText('30000')).toBeInTheDocument()
    expect(screen.getByTestId('transaction-container')).toHaveClass('transaction-container green')
})

test('Check if the amount(negative) and text displayed in the screen correctly', () => {
   render(
        <SingleTrasactionHistory
            key={0}
            deleteTransaction={jest.fn()}
            text="Movie Ticket"
            amount={-200}
        />
    )
    expect(screen.getByText('Movie Ticket')).toBeInTheDocument()
    expect(screen.getByText('-200')).toBeInTheDocument()
    expect(screen.getByTestId('transaction-container')).toHaveClass('transaction-container red')
})