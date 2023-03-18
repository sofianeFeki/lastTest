import {
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
} from '@mui/material';
import {
  Dashboard,
  Headphones,
  Logout,
  ManageAccounts,
  PostAdd,
  SupervisorAccount,
  SupportAgent,
} from '@mui/icons-material';
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Drawer, DrawerHeader } from '../../style/sideList';
import { auth } from '../../firebase/firebase';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { signOut } from 'firebase/auth';

const SideList = () => {
  const { user, drawer } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const history = useNavigate();
  const location = useLocation();
  const list = useMemo(
    () => [
      {
        title: 'Admin',
        icon: <Dashboard />,
        link: '/admin',
      },
      {
        title: 'Back office',
        icon: <PostAdd />,
        link: '/back-office',
      },
      {
        title: 'SAV',
        icon: <SupervisorAccount />,
        link: '/sav',
      },
      {
        title: 'Quality',
        icon: <Headphones />,
        link: '/quality',
      },
      {
        title: 'Support',
        icon: <ManageAccounts />,
        link: '/support',
      },
      {
        title: 'welcome call',
        icon: <SupportAgent />,
        link: '/welcome-call',
      },
    ],
    []
  );

  async function logout() {
    await signOut(auth);
    dispatch({
      type: 'LOGOUT',
      payload: null,
    });
    history('/login');
  }

  const handleClose = () => {
    dispatch({
      type: 'SET_OPEN',
      payload: false,
    });
  };
  return (
    <div>
      {user && (
        <Drawer variant="permanent" open={drawer}>
          <DrawerHeader>
            <IconButton onClick={handleClose}>
              <ChevronLeftIcon />
            </IconButton>
          </DrawerHeader>
          <Divider />

          <List>
            {list.map((item) => (
              <ListItem
                key={item.title}
                disablePadding
                sx={{ display: 'block' }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: drawer ? 'initial' : 'center',
                    px: 2.5,
                  }}
                  onClick={() => history(item.link)}
                  selected={location.pathname === item.link}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: drawer ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.title}
                    sx={{ opacity: drawer ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <Box sx={{ mx: 'auto', mt: 3, mb: 1 }}>
            <Tooltip title={user?.name || 'name'}>
              <Avatar
                src=""
                {...(drawer && { sx: { width: 100, height: 100 } })}
              />
            </Tooltip>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            {drawer && <Typography>{user?.name || 'name'}</Typography>}
            <Typography variant="body2">{user?.role || 'role'}</Typography>
            {drawer && (
              <Typography variant="body2">{user?.email || 'name'}</Typography>
            )}
            <Tooltip title="LOGOUT" sx={{ mt: 1 }}>
              <IconButton onClick={logout}>
                <Logout />
              </IconButton>
            </Tooltip>
          </Box>
        </Drawer>
      )}
    </div>
  );
};

export default SideList;
