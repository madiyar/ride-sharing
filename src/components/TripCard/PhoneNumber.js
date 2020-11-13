import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import { Icon } from 'components';
import useStyles from './useStyles';

export default ({ open, onClose, user }) => (
  <Dialog open={open} onClose={onClose} size="sm">
    <DialogTitle className={useStyles().dialogTitle}>
      <Icon.Phone style={{ marginRight: '8px' }} />
      <span>Телефон нөмірі</span>
    </DialogTitle>
    <DialogContent>
      <DialogContentText style={{ textAlign: 'center '}}>
        {user.firstName} {user.lastName}
      </DialogContentText>
      <DialogContentText style={{ textAlign: 'center '}}>
        {user.phone}
      </DialogContentText>
    </DialogContent>
  </Dialog>
);