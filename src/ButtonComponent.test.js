import Button from './ButtonComponent';
import {render,fireEvent,queryByTitle} from '@testing-library/react';


it("Testing button availability", () => {
    const { queryByTitle } = render(<Button />)
    const btn = queryByTitle("tButton");
    expect(btn).toBeTruthy();
})

describe("checking button click", () => {


    it("Testing button event", () => {

        const { queryByTitle } = render(<Button />)
        const btn = queryByTitle("tButton");
        expect(btn.innerHTML).toBe("Click");//before click
        fireEvent.click(btn);
        expect(btn.innerHTML).toBe("You have clicked");
    })

})
