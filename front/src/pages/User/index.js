import React, { useEffect } from 'react';
import { Avatar, Breadcrumbs, ButtonBase, Grid, Link, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { getUser } from 'store/helpers/actions';
import { Skeleton } from '@material-ui/lab';
import { Comment } from 'components';
import PhoneNumber from 'components/TripCard/PhoneNumber';

const styles = {
  root: {
    maxWidth: 900,
    margin: '0 auto'
  },
  avatar: {
    width: 126,
    height: 126,
    backgroundColor: '#c4d5e4'
  },
  phone: {
    color: '#c2c2c2'
  }
};

const User = () => {
  const [isShow, showPhone] = React.useState(false);
  const { userId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser(userId));
  }, [userId, dispatch]);

  const { user, userLoading: loading } = useSelector(state => state.helpers);

  return (
    <>
      <Grid container spacing={3} style={styles.root}>
        <Grid item xs={12}>
          <Breadcrumbs separator="›">
            <Link component={RouterLink} color="inherit" to="/">
              Басты бет
            </Link>
            <Typography color="textPrimary">Қолданушылар</Typography>
            <Typography color="textPrimary">
              {loading ? <Skeleton animation="wave" width={120} height={15} /> : `${user?.firstName} ${user?.lastName}`}
            </Typography>
          </Breadcrumbs>
        </Grid>
        <Grid item xs={2}>
          <Avatar src={user?.avatar} style={styles.avatar} />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="h4">
            {loading ? <Skeleton animation="wave" width={250} height={50} /> : `${user?.firstName} ${user?.lastName}`}
          </Typography>
          <ButtonBase
            component={Typography}
            style={styles.phone}
            variant="h5"
            onClick={() => showPhone(true)}
          >
            {loading ? <Skeleton animation="wave" width={250} height={50} /> : user?.phone}
          </ButtonBase>
        </Grid>
        <Grid item xs={12}>
          <Comment id={`user${userId}`} />
        </Grid>
      </Grid>
      <PhoneNumber open={isShow} onClose={() => showPhone(false)} user={user} />
    </>
  );
};

export default User;