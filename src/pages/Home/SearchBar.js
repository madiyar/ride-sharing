import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => createStyles({
  root: {
    background: `url("https://picsum.photos/1920/1080?random")`
  }
}))

const SearchBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      SEARCH
    </div>
  )
}

export default SearchBar;
