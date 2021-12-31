import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ReactElement } from 'react';
import { Configs, usePathName } from '../../../features';
import { uiSlice, useAppDispatch, useAppSelector } from '../../../redux';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const StyledAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: Configs.drawerWidth,
    width: `calc(100% - ${Configs.drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const AppBar = (): ReactElement => {
  const pathName = usePathName();
  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.ui.drawerOpen);
  const onDrawerToggle = () => dispatch(uiSlice.actions.toggleDrawer());
  const onThemeToggle = () => dispatch(uiSlice.actions.toggleDarkMode());

  return (
    <StyledAppBar position="absolute" open={open}>
      <Toolbar sx={{ pr: '24px' }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={onDrawerToggle}
          sx={{ marginRight: '36px', ...(open && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          {pathName}
        </Typography>
        <IconButton color="inherit" onClick={onThemeToggle}>
          <Badge color="secondary">
            <BrightnessHighIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </StyledAppBar>
  );
};
