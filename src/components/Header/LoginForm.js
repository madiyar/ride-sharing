import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Dialog, DialogContent, DialogTitle, IconButton, Tab, Tabs, TextField, Typography } from '@material-ui/core';

import useStyles from './useStyles';
import { Icon } from 'components';

const LoginForm = ({ open, onClose }) => {
  const [tab, setTab] = useState(0);
  const { handleSubmit, register, errors } = useForm();
  const classes = useStyles();

  const handleSubmitForm = data => {
    console.log(data);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle className={classes.modalTitle}>
        <Typography variant="body1">Авторизация</Typography>
        <IconButton onClick={() => onClose()}>
          <Icon.X />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Tabs value={tab} onChange={(e, i) => setTab(i)}>
          <Tab label="Кіру" />
          <Tab label="Тіркелу" />
        </Tabs>
        <form onSubmit={handleSubmit(handleSubmitForm)} className={classes.form}>
          <TextField
            label="Телефон нөмірі"
            name="phone_number"
            inputRef={register({ required: true, validate: value => !!value.trim() })}
            error={Boolean(errors?.phone_number) || false}
            helperText={Boolean(errors?.phone_number) && 'Телефон нөмірін еңгізіңіз'}
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            label="Пароль"
            name="password"
            inputRef={register({ required: true, validate: value => !!value.trim() })}
            error={Boolean(errors?.password) || false}
            helperText={Boolean(errors?.password) && 'Құпиясөз еңгізіңіз'}
            variant="outlined"
            margin="normal"
            type="password"
            fullWidth
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
          >
            {tab === 0 ? 'Кіру' : 'Тіркелу'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginForm;
