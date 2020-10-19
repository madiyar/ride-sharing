import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { AppBar, createStyles, makeStyles, Tab, Tabs, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => createStyles({
  header: {
    justifyContent: 'space-between',
    minHeight: theme.spacing(6)
  },
  tab: {
    textTransform: 'none'
  }
}));

const links = [
  { label: 'Іздеу', to: '/' },
  { label: 'Тіркелу', to: '/signup' },
  { label: 'Кіру', to: '/signin' },
];

const Header = ({ location }) => {
  const classes = useStyles();
  const [value, setValue] = useState(location?.pathname || '/');

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
    >
      <Toolbar className={classes.header}>
        <Typography>Ride Share</Typography>
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
              label={link.label}
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
