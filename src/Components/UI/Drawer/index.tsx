import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import { ReactElement } from 'react';
import { useNavigate } from 'react-router';
import { Configs, usePathName } from '../../../features';
import { uiSlice, useAppDispatch, useAppSelector } from '../../../redux';
import { routes } from './routes';

const StyledDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: Configs.drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

export const Drawer = (): ReactElement => {
  const navigate = useNavigate();
  const handleRoutePress = (name: string) => () => navigate(name.toLowerCase());
  const pathName = usePathName();
  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.ui.drawerOpen);
  const onDrawerToggle = () => dispatch(uiSlice.actions.toggleDrawer());

  return (
    <StyledDrawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
        <IconButton onClick={onDrawerToggle}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      {routes.map((section) => (
        <Box key={section.header}>
          <Divider />
          <List>
            {section.header && (
              <ListSubheader inset>{section.header} </ListSubheader>
            )}
            {section.items.map((route) => (
              <ListItemButton
                key={route.name}
                selected={pathName.toLowerCase() === route.name.toLowerCase()}
                onClick={handleRoutePress(route.name)}
              >
                <ListItemIcon>{route.icon}</ListItemIcon>
                <ListItemText primary={route.name} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      ))}
    </StyledDrawer>
  );
};
