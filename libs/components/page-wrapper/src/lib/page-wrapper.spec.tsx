import { render } from '@testing-library/react';

import PageWrapper from './page-wrapper';

describe('ComponentsPageWrapper', () => {
  it('should render successfully', () => {
    const { container } = render(
      <PageWrapper>
        <h1>Hello World</h1>
      </PageWrapper>
    );
    expect(container).toMatchSnapshot();
  });
});
