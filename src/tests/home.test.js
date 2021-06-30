import Home from "../pages/Home.js";
import renderer from 'react-test-renderer';
import React from 'react';

it('renders correctly', () => {
    const tree = renderer
      .create(<Home />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });