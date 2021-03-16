import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Dialog, DialogContent, DialogTitle, IconButton, Tab, Tabs, TextField, Typography } from '@material-ui/core';

import useStyles from './useStyles';
import { Icon, Loader } from 'components';
import { connect } from 'react-redux';

import { authUser, signUp } from 'store/helpers/actions';

const LoginForm = ({
  open,
  onClose,
  loading,
  authUser,
  signUp
}) => {
  const [tab, setTab] = useState(0);
  const { handleSubmit, register, errors } = useForm();
  const classes = useStyles();

  const handleSubmitForm = data => {
    if (tab === 0) {
      authUser(data);
    } else {
      signUp(data);
    }
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
        <Loader open={loading} />
        <Tabs value={tab} onChange={(e, i) => setTab(i)}>
          <Tab label="Кіру" />
          <Tab label="Тіркелу" />
        </Tabs>
        <form onSubmit={handleSubmit(handleSubmitForm)} className={classes.form}>
          {tab === 1 && (
            <>
              <TextField
                label="Фамилия"
                name="lastName"
                inputRef={register({ required: true, validate: value => !!value.trim() })}
                error={Boolean(errors?.lastName) || false}
                helperText={Boolean(errors?.lastName) && 'Фамилия еңгізіңіз'}
                variant="outlined"
                margin="normal"
                fullWidth
              />
              <TextField
                label="Атыңыз"
                name="firstName"
                inputRef={register({ required: true, validate: value => !!value.trim() })}
                error={Boolean(errors?.firstName) || false}
                helperText={Boolean(errors?.firstName) && 'Атыңызды еңгізіңіз'}
                variant="outlined"
                margin="normal"
                fullWidth
              />
            </>
          )}
          <TextField
            label="Телефон нөмірі"
            name="phone"
            inputRef={register({ required: true, validate: value => !!value.trim() })}
            error={Boolean(errors?.phone) || false}
            helperText={Boolean(errors?.phone) && 'Телефон нөмірін еңгізіңіз'}
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

const mapState = ({ helpers }) => ({
  loading: helpers.authFormLoading,
});

export default connect(mapState, { authUser, signUp })(LoginForm);
