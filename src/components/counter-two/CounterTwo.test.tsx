import { render , screen } from "@testing-library/react";
import { CounterTwo } from "./CounterTwo";
import React from "react";
import userEvent from "@testing-library/user-event";
describe("CounterTwo", () => {
    test("renders correctly" , () => {
        render(<CounterTwo count={0} />)
        const textElement = screen.getByText('Counter Two')
        expect(textElement).toBeInTheDocument()
    })
    test('handlers are called' ,async () =>{
        const user = userEvent.setup()
        // adding mock data for testing
        // testing code with mock func without worry about implementing in/out
        const incrementHandler = jest.fn()
        const decrementHandler = jest.fn()
        render(<CounterTwo count={0} 
        handleIncrement = {incrementHandler}
        handleDecrement = {decrementHandler}
        />)
        const incrementButton = screen.getByRole('button' , {
            name: 'Increment'
        })
        const decrementButton = screen.getByRole('button' , {
            name: 'Decrement'
        })
        // adding user event 
        await userEvent.click(incrementButton)
        await userEvent.click(decrementButton)

        expect(incrementHandler).toBeCalledTimes(1)
        expect(decrementHandler).toBeCalledTimes(1)
    })
})