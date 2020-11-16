import React from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

export default ({ icon, title, value }) => (
  <ListItem disableGutters>
    <ListItemIcon>{icon}</ListItemIcon>
    <ListItemText primary={title} secondary={value} />
  </ListItem>
);