import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../pages';

test('render without crashing', () => {
  const { container } = render(<Home />);

  expect(container).toMatchSnapshot();
});
