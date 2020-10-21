import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { AppBar, createStyles, makeStyles, Tab, Tabs, Toolbar, Typography } from '@material-ui/core';
import { Icon } from 'components';

const useStyles = makeStyles(theme => createStyles({
  header: {
    justifyContent: 'space-between',
    minHeight: theme.spacing(8),
    background: '#f6e7da'
  },
  tab: {
    minHeight: theme.spacing(8),
    textTransform: 'none',
    '& .MuiTab-wrapper': {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      '& span': {
        marginLeft: theme.spacing(1)
      }
    }
  }
}));

const links = [
  { label: 'Іздеу', to: '/', icon: <Icon.Search size={16} /> },
  { label: 'Авторизация', to: '/login', icon: <Icon.User size={16} /> },
];

const Header = ({ location }) => {
  const classes = useStyles();
  const [value, setValue] = useState(location?.pathname || '/');

  return (
    <AppBar
      position="fixed"
      elevation={1}
    >
      <Toolbar className={classes.header}>
        <Typography>
          <Link to="/">Ride Share</Link>
        </Typography>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={(e, value) => setValue(value)}
        >
          {links.map((link, i) => (
            <Tab
              key={i}
              value={link.to}
              label={<>{link.icon} <span>{link.label}</span></>}
              className={classes.tab}
              component={Link}
              to={link.to}
            />
          ))}
        </Tabs>
      </Toolbar>
    </AppBar>
  )
}

export default withRouter(Header);
