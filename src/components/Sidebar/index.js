import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { createStyles, Drawer, IconButton, List, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import { Icon } from 'components';

const useStyles = makeStyles(theme => createStyles({
  drawer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
}))

const links = [
  { label: 'Іздеу', to: '/', icon: <Icon.Map /> },
  { label: 'Авторизация', to: '/login', icon: <Icon.PlusCircle /> },
];

const Sidebar = ({ location, isMobile, open, onClose }) => {
  const classes = useStyles();
  const [activePage, setActivePage] = useState('/');

  useEffect(() => {
    setActivePage(location?.pathname);
  }, [location]);

  return (
    <Drawer
      open={open}
      onClose={onClose}
      variant={!isMobile ? 'persistent' : 'temporary'}
      classes={{ paper: !isMobile ? classes.drawer : '' }}
    >
      <List>
        <ListItem>
          <IconButton>
            <Icon.Map />
          </IconButton>
            {isMobile && (
              <ListItemText>Жолаушы</ListItemText>
            )}
        </ListItem>
      </List>
      <List>
        {links.map(link => (
          <ListItem
            button
            key={link.to}
            selected={activePage === link.to}
            component={Link}
            to={link.to}
          >
            <IconButton disableRipple>
              {link.icon}
            </IconButton>
            {isMobile && (
              <ListItemText>{link.label}</ListItemText>
            )}
          </ListItem>
        ))}
      </List>
      <List>
        <ListItem button>
          <IconButton disableRipple>
            <Icon.LogOut />
          </IconButton>
          {isMobile && (
            <ListItemText>Шығу</ListItemText>
          )}
        </ListItem>
      </List>
    </Drawer>
  );
};

export default withRouter(Sidebar);
