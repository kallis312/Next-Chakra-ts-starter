import * as nextRouter from 'next/router';

import { render, screen } from '@testing-library/react';

import HomePage from '@/pages';

describe('HomePage', () => {
  it('home page content rendered properly', () => {
    const useRouter = jest.spyOn(nextRouter, 'useRouter');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    useRouter.mockReturnValue({
      asPath: '/',
    });

    render(<HomePage />);

    const heading = screen.getByRole('heading', {
      name: 'Next.js + Chakra UI + Typescript Starter',
    });

    expect(heading).toBeInTheDocument();
  });
});
