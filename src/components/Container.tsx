import * as React from 'react';

import { Box, BoxProps } from '@chakra-ui/react';

type ContainerProps = {
  children: React.ReactNode;
} & BoxProps;

const Container = ({ children, ...rest }: ContainerProps) => {
  return (
    <Box maxW='4xl' mx='auto' px={{ base: 10, lg: 8 }} {...rest}>
      {children}
    </Box>
  );
};

export default Container;
