import { screen, render } from "@testing-library/react";
import { CurrentBalance } from "../components/CurrentBalance";

test('Check if the currentBalace is showing balance', () => {
    const data = [
        {text: 'income', amount: '10000'},
        {text: 'rent', amount: '-5000'}
    ]
    render(
        <CurrentBalance
            totalTransactionHistory={data}
        />
    )
    expect(screen.getByText('Your Balance')).toBeInTheDocument()
    expect(screen.getByText('5000')).toBeInTheDocument()
})