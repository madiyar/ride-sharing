import React, { useState } from 'react';
import { AppBar, Badge, IconButton, Menu, MenuItem, TextField, Toolbar } from '@material-ui/core';
import { Icon } from 'components';

import useStyles from './useStyles';
import LoginForm from './LoginForm';

const Header = ({ openSidebar, isMobile }) => {
  const classes = useStyles();
  const [openLoginForm, setOpenLoginForm] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const user = localStorage.getItem('user');

  const handleUserClick = (e) => {
    if (!!user) {
      setAnchorEl(e.currentTarget);
    } else {
      setOpenLoginForm(true);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleExit = () => {
    localStorage.removeItem('user');
    document.location.reload();
    handleClose();
  };

  return (
    <>
      <AppBar
        position="relative"
        elevation={0}
        color="transparent"
      >
        <Toolbar className={classes.header}>
          <div className={classes.left}>
            {isMobile && (
              <IconButton style={{ marginRight: 16 }} onClick={() => openSidebar()}>
                <Icon.Menu />
              </IconButton>
            )}
            <TextField
              variant="outlined"
              label="Іздеу"
              size="small"
            />
          </div>
          <div>
            <IconButton>
              <Badge
                color="primary"
                variant="dot"
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <Icon.Bell />
              </Badge>
            </IconButton>
            <IconButton onClick={handleUserClick}>
              <Icon.User />
            </IconButton>
            <Menu
              keepMounted
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Менің парақшам</MenuItem>
              <MenuItem onClick={handleExit}>Шығу</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <LoginForm
        open={openLoginForm}
        onClose={() => setOpenLoginForm(false)}
      />
    </>
  )
}

export default Header;
