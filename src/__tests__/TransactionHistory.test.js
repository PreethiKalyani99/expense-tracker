import { screen, render } from "@testing-library/react";
import { TransactionHistory } from "../components/TransactionHistory";


jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
}))

test('Check the transaction history', () => {
    const data = [
        {text: 'income', amount: '10000'},
        {text: 'rent', amount: '-5000'}
    ]
    render(
        <TransactionHistory
            totalTransactionHistory={data}
            setTotalTransactionHistory={jest.fn()}
        />
    )
    expect(screen.getAllByTestId('transaction-container')).toHaveLength(data.length)
})