import { render , screen } from "../../test-utils";
import { MuiMode } from "./mui-mode";

describe('Mui Mode',() => {
    test('renders text correctly' , () => {
        // cause muimode does not have provider component 
        // so we add in render appprovider as a wrapper
        // adding test utils to get provider globally
        render(<MuiMode />)
        // ,{
        //     wrapper: AppProviders
        // }
        const headingElement = screen.getByRole('heading')
        expect(headingElement).toHaveTextContent('dark mode')
    })

})