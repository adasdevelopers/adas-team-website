import React from "react";
import { render, cleanup } from "@testing-library/react";
import Home from "../pages/Home";
import Events from "../pages/Events";

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<Events />);
  expect(asFragment()).toMatchSnapshot();
});