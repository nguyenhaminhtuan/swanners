import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

test('render without crash', () => {
  const { toJSON } = render(<App />);

  expect(toJSON()).toMatchSnapshot();
});
