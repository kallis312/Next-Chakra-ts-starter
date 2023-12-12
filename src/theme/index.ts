import { extendTheme } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  semanticTokens: {
    colors: {
      primary: {
        default: 'orange.600',
        _dark: 'orange.300',
      },
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        color: mode('gray.800', 'whiteAlpha.900')(props),
        bg: mode('white', 'gray.900')(props),
      },
    }),
  },
  shadows: {
    outline: '0 0 0 3px rgba(246, 173, 85, 0.6)',
  },
});

export default theme;
