import TextBox from "./TextBox";

import { render, fireEvent, screen } from "@testing-library/react";

it("testing the textbox value", () => {
  render(<TextBox />);
  const textbox = screen.getByRole("textbox");
  fireEvent.change(textbox, { target: { value: "Hello World" } });

  expect(textbox.value).toBe("Hello World");
});
