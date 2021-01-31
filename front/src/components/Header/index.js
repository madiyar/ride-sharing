import React, { useState } from 'react';
import { AppBar, Badge, Button, IconButton, Menu, MenuItem, TextField, Toolbar } from '@material-ui/core';
import { Icon } from 'components';

import useStyles from './useStyles';
import LoginForm from './LoginForm';

const Header = ({ openSidebar, isMobile }) => {
  const classes = useStyles();
  const [openLoginForm, setOpenLoginForm] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const user = JSON.parse(localStorage.getItem('user'));

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
        style={{
          marginTop: '16px'
        }}
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
            {/* <IconButton>
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
            </IconButton> */}
            <Button
              onClick={handleUserClick}
              size="large"
              color="primary"
              variant="outlined"
              style={{
                padding: `8px 24px`,
                textTransform: 'inherit',
                borderRadius: '999rem'
              }}
              startIcon={<Icon.User />}
            >
              {user.firstName}
            </Button>
            <Menu
              keepMounted
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              style={{
                marginTop: '56px'
              }}
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
