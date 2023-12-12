import { Text } from '@chakra-ui/react';

import Container from '@/components/Container';

const Footer = () => {
  return (
    <Container
      as='footer'
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      w='100%'
      minH='4rem'
    >
      <Text fontSize='sm'>
        © Muhammad Rizqi Tsani {new Date().getFullYear()}
      </Text>
    </Container>
  );
};

export default Footer;
