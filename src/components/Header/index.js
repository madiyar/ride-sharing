import React from 'react';
import { AppBar, Badge, createStyles, IconButton, makeStyles, TextField, Toolbar } from '@material-ui/core';
import { Icon } from 'components';

const useStyles = makeStyles(theme => createStyles({
  header: {
    justifyContent: 'space-between',
    minHeight: theme.spacing(8),
    background: '#f6e7da'
  },
  left: {
    display: 'flex',
    alignItems: 'center',
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

const Header = ({ openSidebar, isMobile }) => {
  const classes = useStyles();
  return (
    <AppBar
      position="relative"
      elevation={1}
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
          <IconButton>
            <Icon.User />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
