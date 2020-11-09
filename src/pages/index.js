import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import clsx from 'clsx';

import { useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Header, Sidebar } from 'components';

import Home from './Home';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    position: 'relative'
  },
  shiftContent: {
    paddingLeft: 80,
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflowY: 'auto',
  }
}));

export default function Pages() {
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(!openSidebar);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const shouldOpenSidebar = isDesktop ? true : openSidebar;

  return (
    <main className={classes.root}>
      <Sidebar
        open={shouldOpenSidebar}
        onClose={handleSidebarClose}
        variant={isDesktop ? 'persistent' : 'temporary'}
        isMobile={!isDesktop}
      />
      <section className={clsx({
          [classes.content]: true,
          [classes.shiftContent]: isDesktop,
        })}
      >
        <Header openSidebar={() => handleSidebarOpen()} isMobile={!isDesktop} />
        <div style={{ padding: 24 }}>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </section>
    </main>
  );
}
