import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Dialog, DialogContent, DialogTitle, IconButton, Tab, Tabs, TextField, Typography } from '@material-ui/core';

import useStyles from './useStyles';
import { Icon, Loader } from 'components';
import { connect } from 'react-redux';

import { authUser } from 'store/helpers/actions';

const LoginForm = ({
  open,
  onClose,
  user,
  loading,
  authUser
}) => {
  const [tab, setTab] = useState(0);
  const { handleSubmit, register, errors } = useForm();
  const classes = useStyles();

  const handleSubmitForm = data => {
    if (tab === 0) {
      authUser(data);
    } else {
      // register
      console.log(data);
    }
  };

  useEffect(() => {
    if (!!user && !loading && open) {
      document.location.reload();
    }
  }, [user, loading]);

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
  user: helpers.user,
  loading: helpers.authFormLoading,
});

export default connect(mapState, { authUser })(LoginForm);
