import React from 'react';

import NavbarLogic from './NavbarLogic';
/* 
import ClubLogo from '../../assets/images/text-logo/logo-text@500px'; */
import { ReactComponent as ImmoecoTextLogo } from '../../assets/images/logo-text.svg';

import {
  AppBar,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
  Typography,
} from '@mui/material';
import { FiMenu, FiX } from 'react-icons/fi';
import { Box } from '@mui/system';
import { HashLink as RouterLink } from 'react-router-hash-link';

function Navbar({ noNavLinks }) {
  const { navLinksObj, drawerOpened, toggleDrawer } = NavbarLogic();

  const drawer = (
    <SwipeableDrawer
      anchor={'left'}
      open={drawerOpened}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      <Box
        sx={{
          width: 250,
          height: '100%',
          backgroundColor: 'background.default',
        }}
        role='presentation'
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          {navLinksObj.map((linkObj) => {
            return (
              <ListItem
                button
                key={linkObj.text}
                component={RouterLink}
                to={linkObj.to}
                sx={{
                  textTransform: 'uppercase',
                  color: 'text.primary',
                  '&:hover': { textDecoration: 'none' },
                }}
              >
                <ListItemText primary={linkObj.text} />
              </ListItem>
            );
          })}
        </List>
      </Box>
    </SwipeableDrawer>
  );

  return (
    <>
      <AppBar
        elevation={0}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'end',
          alignItems: 'center',
          px: 2,
          height: '80px',
          backgroundColor: 'background.default',
        }}
      >
        <Link
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            width: '200px',
            ml: 2,
            mr: 'auto',
          }}
          component={RouterLink}
          to='/'
        >
          <ImmoecoTextLogo />
        </Link>
        {!noNavLinks ??
          navLinksObj.map((linkObj) => {
            return (
              <Link
                key={linkObj.text}
                component={RouterLink}
                to={linkObj.to}
                sx={{
                  mx: 2,
                  px: 1,
                  py: 2,
                  textTransform: 'uppercase',
                  color: 'text.primary',
                  transitionDuration: '500ms',
                  border: '2px solid transparent',
                  ':hover': {
                    borderBottomColor: 'primary.main',
                    textDecoration: 'none',
                    color: 'primary.main',
                  },
                  display: { xs: 'none', md: 'none', lg: 'inline' },
                }}
              >
                <Typography variant='h6'>{linkObj.text}</Typography>
              </Link>
            );
          })}
        <IconButton
          sx={{
            p: 2,
            display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none' },
            color: 'text.primary',
          }}
          onClick={toggleDrawer(true)}
        >
          {drawerOpened ? <FiX size={25} /> : <FiMenu size={25} />}
        </IconButton>
      </AppBar>
      {!noNavLinks && drawer}
    </>
  );
}

export default Navbar;
