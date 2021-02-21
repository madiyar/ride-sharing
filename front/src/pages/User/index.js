import React, { useEffect } from 'react';
import { Avatar, Grid, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUser } from 'store/helpers/actions';

const styles = {
  avatar: {
    width: 200,
    height: 200,
    backgroundColor: '#c4d5e4'
  }
};

const User = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser(userId));
  }, [userId, dispatch]);

  const { user, userLoading: loading } = useSelector(state => state.helpers);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Avatar src={user?.avatar} style={styles.avatar} />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="h4">
            {user?.firstName} {user?.lastName}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default User;