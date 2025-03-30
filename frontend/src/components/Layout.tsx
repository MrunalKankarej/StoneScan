import React, { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
  Avatar,
  Tooltip,
  Badge,
  alpha,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  Person as PersonIcon,
  CloudUpload as UploadIcon,
  History as HistoryIcon,
  ExitToApp as LogoutIcon,
  Info as InfoIcon,
  Notifications as NotificationsIcon,
  Settings as SettingsIcon,
  Help as HelpIcon,
} from '@mui/icons-material';

const drawerWidth = 250;

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
  { text: 'Profile', icon: <PersonIcon />, path: '/profile' },
  { text: 'Upload Scan', icon: <UploadIcon />, path: '/upload' },
  { text: 'History', icon: <HistoryIcon />, path: '/history' },
  { text: 'About', icon: <InfoIcon />, path: '/about' },
];

const Layout: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const drawer = (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
        color: 'white',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
          borderBottom: `1px solid ${alpha('#fff', 0.1)}`,
        }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontWeight: 'bold',
              letterSpacing: 1,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box
              component="span"
              sx={{
                mr: 1,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: 'linear-gradient(45deg, #fff, rgba(255,255,255,0.8))',
                boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
              }}
            >
              <Typography
                variant="h5"
                component="span"
                sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}
              >
                S
              </Typography>
            </Box>
            StoneScan
          </Typography>
        </motion.div>
      </Box>

      <Box sx={{ p: 2, borderBottom: `1px solid ${alpha('#fff', 0.1)}`, display: 'flex', alignItems: 'center' }}>
        <Avatar
          src="https://randomuser.me/api/portraits/men/44.jpg"
          sx={{ width: 48, height: 48, mr: 2 }}
        />
        <Box>
          <Typography variant="subtitle1" fontWeight="medium">
            Dr. David Wilson
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            Radiologist
          </Typography>
        </Box>
      </Box>

      <Box sx={{ flexGrow: 1, overflow: 'auto', mt: 2 }}>
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              key={item.text}
              component={motion.div}
              whileHover={{ x: 4, transition: { duration: 0.1 } }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                navigate(item.path);
                if (isMobile) setMobileOpen(false);
              }}
              sx={{
                mb: 1,
                mx: 1,
                borderRadius: '10px',
                backgroundColor: isActive(item.path)
                  ? alpha('#fff', 0.15)
                  : 'transparent',
                '&:hover': {
                  backgroundColor: alpha('#fff', 0.1),
                },
                cursor: 'pointer',
                transition: 'background-color 0.2s',
              }}
            >
              <ListItemIcon
                sx={{
                  color: isActive(item.path) ? '#fff' : alpha('#fff', 0.7),
                  minWidth: 40,
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontWeight: isActive(item.path) ? 'bold' : 'normal',
                  color: isActive(item.path) ? '#fff' : alpha('#fff', 0.8),
                }}
              />
              {isActive(item.path) && (
                <Box
                  component={motion.div}
                  layoutId="activeIndicator"
                  sx={{
                    width: 4,
                    height: 20,
                    backgroundColor: '#fff',
                    borderRadius: 4,
                    position: 'absolute',
                    right: 10,
                  }}
                />
              )}
            </ListItem>
          ))}
        </List>
      </Box>

      <Box sx={{ p: 2, borderTop: `1px solid ${alpha('#fff', 0.1)}` }}>
        <ListItem
          component={motion.div}
          whileHover={{ x: 4, transition: { duration: 0.1 } }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            localStorage.removeItem('token');
            navigate('/login');
          }}
          sx={{
            borderRadius: '10px',
            '&:hover': {
              backgroundColor: alpha('#fff', 0.1),
            },
            cursor: 'pointer',
          }}
        >
          <ListItemIcon sx={{ color: alpha('#fff', 0.7), minWidth: 40 }}>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText
            primary="Logout"
            primaryTypographyProps={{
              color: alpha('#fff', 0.8),
            }}
          />
        </ListItem>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(8px)',
          borderBottom: `1px solid ${theme.palette.divider}`,
          color: 'text.primary',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            {menuItems.find(item => isActive(item.path))?.text || 'Dashboard'}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Tooltip title="Help">
              <IconButton 
                color="inherit"
                component={motion.button}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <HelpIcon />
              </IconButton>
            </Tooltip>
            
            <Tooltip title="Settings">
              <IconButton 
                color="inherit"
                component={motion.button}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <SettingsIcon />
              </IconButton>
            </Tooltip>
            
            <Tooltip title="Notifications">
              <IconButton 
                color="inherit"
                component={motion.button}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge badgeContent={3} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        {isMobile ? (
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
                borderRight: 'none',
              },
            }}
          >
            {drawer}
          </Drawer>
        ) : (
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
                borderRight: 'none',
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        )}
      </Box>
      
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          mt: '64px',
          position: 'relative',
          overflow: 'auto',
          height: 'calc(100vh - 64px)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{ 
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            minHeight: 0,
            overflowY: 'auto'
          }}
        >
          <Outlet />
        </motion.div>
      </Box>
    </Box>
  );
};

export default Layout; 