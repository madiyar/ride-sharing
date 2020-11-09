import React, { useState } from 'react';
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

const Sidebar = ({ location, isMobile, ...rest }) => {
  const classes = useStyles();
  const [value, setValue] = useState(location?.pathname || '/');

  return (
    <Drawer {...rest} classes={{ paper: classes.drawer }}>
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
          <ListItem button selected={value === link.to}>
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
