import Link from 'next/link';
import * as React from 'react';

import {
  Box,
  Flex,
  FlexProps,
  Icon,
  Link as ChakraLink,
  LinkProps,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { IconType } from 'react-icons';

type DesktopNavLinkProps = {
  active: boolean;
  href: string;
} & LinkProps;

type MobileNavLinkProps = {
  children: React.ReactNode;
  href: string;
  icon: IconType;
  onClick: () => void;
} & FlexProps;

const DesktopNavLink = ({ active, href, ...rest }: DesktopNavLinkProps) => {
  return (
    <Link href={href} passHref>
      <ChakraLink
        aria-current={active ? 'page' : undefined}
        fontWeight='semibold'
        color={mode('gray.600', 'gray.300')}
        {...rest}
        _activeLink={{
          color: 'primary',
          fontWeight: 'bold',
        }}
        _focus={{ outline: 'none' }}
      />
    </Link>
  );
};

const MobileNavLink = ({
  children,
  href,
  icon,
  ...rest
}: MobileNavLinkProps) => {
  return (
    <Link href={href} passHref>
      <Flex
        as='a'
        m='-3'
        p={3}
        align='center'
        rounded='md'
        cursor='pointer'
        _hover={{ bg: mode('gray.50', 'gray.600') }}
        {...rest}
      >
        <Icon as={icon} color='primary' fontSize='xl' />
        <Box ml={3} fontWeight='medium'>
          {children}
        </Box>
      </Flex>
    </Link>
  );
};

const NavLink = {
  Desktop: DesktopNavLink,
  Mobile: MobileNavLink,
};

export default NavLink;
