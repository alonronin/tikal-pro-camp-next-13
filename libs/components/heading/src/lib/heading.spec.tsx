import { render } from '@testing-library/react';

import Heading from './heading';

describe('ComponentsHeading', () => {
  it('should render successfully', () => {
    const { container } = render(<Heading>Hello</Heading>);
    expect(container).toMatchSnapshot();
  });
});
