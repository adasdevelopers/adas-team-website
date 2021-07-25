import React from "react";
import { render, cleanup } from "@testing-library/react";
import Home from "../pages/Home";
import About from "../pages/About";
import Connect from "../pages/Connect";
import FAQ from "../pages/FAQ";
import Join from "../pages/Join";
import JobBoard from "../pages/JobBoard";

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<Home />);
  expect(asFragment()).toMatchSnapshot();
});
