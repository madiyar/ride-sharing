import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
} from '@material-ui/core';
import useStyles from './useStyles';

export default ({ open, onClose, handleSubmit }) => (
  <Dialog open={open} onClose={onClose} size="sm">
    <DialogTitle className={useStyles().dialogTitle}>
      Жолаушы боласыз ба?
    </DialogTitle>
    <DialogActions className={useStyles().dialogActions}>
      <Button variant="contained" color="primary" onClick={handleSubmit} fullWidth>Иә</Button>
      <Button variant="outlined" color="primary" onClick={onClose} fullWidth>Жоқ</Button>
    </DialogActions>
  </Dialog>
);