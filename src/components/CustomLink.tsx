import NextLink from 'next/link';
import * as React from 'react';

import { Link, LinkProps } from '@chakra-ui/react';

type CustomLinkProps = {
  children: React.ReactNode;
  href: string;
  // openNewTab?: boolean;
} & LinkProps;

const CustomLink = ({
  children,
  href,
  // openNewTab,
  ...rest
}: CustomLinkProps) => {
  const isRelative = (href.startsWith('/') || href.startsWith('#')) ?? false;

  return isRelative ? (
    <NextLink href={href} passHref>
      <Link {...rest}>{children}</Link>
    </NextLink>
  ) : (
    <Link href={href} isExternal {...rest}>
      {children}
    </Link>
  );
};

export default CustomLink;
