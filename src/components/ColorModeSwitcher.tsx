import {
  useColorMode,
  useColorModeValue as mode,
  IconButton,
  IconButtonProps,
} from '@chakra-ui/react';
import { HiMoon, HiOutlineSun } from 'react-icons/hi';

const ColorModeSwitcher = (props: IconButtonProps) => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = mode(HiMoon, HiOutlineSun);

  return (
    <IconButton
      size='md'
      fontSize='2xl'
      variant='ghost'
      color='current'
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};

export default ColorModeSwitcher;
