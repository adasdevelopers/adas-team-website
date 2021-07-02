import React from "react";
import { render, cleanup } from "@testing-library/react";
import Home from "../pages/Home";

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<Home />);
  expect(asFragment()).toMatchSnapshot();
});