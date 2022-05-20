import RecipeSearch from "./RecipeSearch.js";
import {render,screen} from '@testing-library/react';
import '@testing-library/jest-dom';


test("RecipeSearch button displays on browser", function() {

    render(<RecipeSearch />)
    //const element = screen.getByText(/search/i)
    const element = screen.getByTestId("btn");
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug(element)
    expect(element).toBeInTheDocument()
});