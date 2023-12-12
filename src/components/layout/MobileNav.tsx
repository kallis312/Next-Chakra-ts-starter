import { useRef } from 'react';

import {
  Box,
  Flex,
  IconButton,
  Portal,
  SimpleGrid,
  useBoolean,
  useFocusOnShow,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { HTMLMotionProps, motion } from 'framer-motion';
import FocusLock from 'react-focus-lock';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { RemoveScroll } from 'react-remove-scroll';

import ColorModeSwitcher from '@/components/ColorModeSwitcher';
import { NavLinksType } from '@/components/layout/NavBar';
import NavLink from '@/components/layout/NavLink';
import Logo from '@/components/Logo';

type BackdropProps = {
  show: boolean;
};

type TransitionProps = {
  children: React.ReactNode;
  in: boolean;
} & HTMLMotionProps<'div'>;

type MobileNavProps = {
  links: NavLinksType;
};

const variants = {
  show: {
    display: 'revert',
    opacity: 1,
    scale: 1,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
  hide: {
    opacity: 0,
    scale: 0.98,
    transition: { duration: 0.1, ease: 'easeIn' },
    transitionEnd: { display: 'none' },
  },
};

const Backdrop = ({ show }: BackdropProps) => (
  <Portal>
    <motion.div
      initial={false}
      animate={show ? 'show' : 'hide'}
      transition={{ duration: 0.1 }}
      variants={{
        show: { opacity: 1, display: 'revert' },
        hide: { opacity: 0, transitionEnd: { display: 'none' } },
      }}
      style={{
        width: '100%',
        height: '100vh',
        position: 'absolute',
        background: 'rgba(0,0,0,0.2)',
        inset: 0,
      }}
    />
  </Portal>
);

const Transition = ({ in: inProp, ...rest }: TransitionProps) => {
  return (
    <motion.div
      {...rest}
      initial={false}
      variants={variants}
      animate={inProp ? 'show' : 'hide'}
      style={{
        transformOrigin: 'top right',
        position: 'absolute',
        width: 'calc(100% - 32px)',
        top: '24px',
        left: '16px',
        margin: '0 auto',
        zIndex: 1,
      }}
    />
  );
};

const MobileNav = ({ links }: MobileNavProps) => {
  const [show, { toggle, off }] = useBoolean();
  const ref = useRef(null);
  useFocusOnShow(ref, { visible: show, shouldFocus: true });

  return (
    <>
      <Box
        as='button'
        type='button'
        aria-label='Open menu'
        p={1}
        fontSize='2xl'
        color='gray.600'
        onClick={toggle}
        display={{ base: 'block', md: 'none' }}
      >
        <HiOutlineMenu />
      </Box>

      <Transition in={show}>
        <RemoveScroll enabled={show}>
          <Backdrop show={show} />
        </RemoveScroll>
        <FocusLock disabled={!show} returnFocus>
          <Box
            bg={mode('white', 'gray.700')}
            shadow='lg'
            rounded='lg'
            ref={ref}
            tabIndex={0}
            outline={0}
          >
            <Box pt={5} pb={6} px={5}>
              <Flex justify='space-between' align='center'>
                <Logo />
                <Flex mr={-2} mt={-2}>
                  <ColorModeSwitcher
                    aria-label={`Switch to ${mode('dark', 'light')} mode`}
                  />
                  <IconButton
                    size='md'
                    fontSize='2xl'
                    aria-label={`Close menu`}
                    variant='ghost'
                    color={mode('gray.600', 'gray.400')}
                    onClick={off}
                    icon={<HiOutlineX />}
                  />
                </Flex>
              </Flex>
              <SimpleGrid as='nav' gap={6} mt={8} columns={{ base: 1, sm: 2 }}>
                {links.map((link, idx) => (
                  <NavLink.Mobile
                    key={idx}
                    href={link.href}
                    icon={link.icon}
                    onClick={toggle}
                  >
                    {link.label}
                  </NavLink.Mobile>
                ))}
              </SimpleGrid>
            </Box>
          </Box>
        </FocusLock>
      </Transition>
    </>
  );
};

export default MobileNav;
