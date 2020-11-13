import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Header, NotFound, Sidebar } from 'components';

import Routes from './Routes';

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
  const { status } = useSelector(state => ({
    status: state.helpers?.error?.status
  }));
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
        isMobile={!isDesktop}
      />
      <section className={clsx({
          [classes.content]: true,
          [classes.shiftContent]: isDesktop,
        })}
      >
        <Header openSidebar={() => handleSidebarOpen()} isMobile={!isDesktop} />
        <div style={{ padding: 24 }}>
          {status === 404 ? (
            <NotFound />
          ) : (
            <Routes />
          )}
        </div>
      </section>
    </main>
  );
};
