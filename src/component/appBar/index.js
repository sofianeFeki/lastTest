import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Box,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { AppBarStyle } from '../../style/appbar';
import SideList from './SideList';
import { DrawerHeader } from '../../style/sideList';

const CrmAppbar = () => {
  const { drawer, user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  const handleDrawerOpen = () => {
    dispatch({
      type: 'SET_OPEN',
      payload: true,
    });
  };

  return (
    <>
      {user && (
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBarStyle position="fixed" open={drawer}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 5,
                  ...(drawer && { display: 'none' }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1 }}
              >
                Kompar Dashboard
              </Typography>
              <IconButton onClick={() => console.log('im ready')}>
                {drawer ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            </Toolbar>
          </AppBarStyle>
          <SideList />
          <DrawerHeader />
        </Box>
      )}
    </>
  );
};

export default CrmAppbar;
