import { render, renderHook } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe("useCounter" , () => {
    test('should render the initial count' , () => {
        // we can not render hooks because it doesnot give back jsx
        // and if do not use render it 
        //won't  work 
        // so we use renderhook 
        // hooks do not have dom element , hooks wrapped it in a func component and 
        // invoke it and save it in result
        const {result} = renderHook(useCounter)
        // .current all value from custom hook
        expect(result.current.count).toBe(0)
    })
    test('should accept and render the same intial counter' , () => {
        // passing option object  as second argument
        const {result} = renderHook(useCounter , {
            initialProps:{
                initialCount : 10
            } ,
        })
        expect(result.current.count).toBe(10)
        

    })

})