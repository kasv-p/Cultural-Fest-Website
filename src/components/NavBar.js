import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Hidden,
  CssBaseline,
  Box
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import '../styles/navbar.css';

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className="navbar-container">
      <CssBaseline />
      <AppBar
        position="fixed"
        className="navbar"
      >
        <Toolbar>
          <Typography variant="h6" component="div">
            Your Logo
          </Typography>
          <Hidden smUp>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
              sx={{ ml: 'auto' }}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Hidden>
          <Hidden mdUp>
            <Drawer anchor="right" open={open} onClose={toggleDrawer}>
              <List sx={{ width: 250 }} onClick={toggleDrawer}>
                <ListItem>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    p={1}
                    sx={{ cursor: 'pointer', color: 'black' }}
                  >
                    <IconButton onClick={toggleDrawer}>
                      <CloseIcon fontSize="large" />
                    </IconButton>
                  </Box>
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Item 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Item 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Item 3" />
                </ListItem>
              </List>
            </Drawer>
          </Hidden>
          <Hidden smDown>
            <List
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '20px',
                ml: 'auto',
              }}
            >
              <ListItem button>
                <ListItemText primary="Item 1" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Item 2" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Item 3" />
              </ListItem>
            </List>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
