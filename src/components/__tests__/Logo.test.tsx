import { render, screen } from '@testing-library/react';

import Logo from '@/components/Logo';

describe('HomePage', () => {
  it('home page content rendered properly', () => {
    render(<Logo />);

    const heading = screen.getByRole('link', {
      name: 'next-chakra-ts',
    });

    expect(heading).toBeInTheDocument();
  });
});
