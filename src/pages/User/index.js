import React, { useEffect } from 'react';
import { Avatar, Breadcrumbs, ButtonBase, Button, Grid, Link, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { getUser, uploadCarPhoto } from 'store/helpers/actions';
import { Skeleton } from '@material-ui/lab';
import { Comment, Icon, Loader } from 'components';
import PhoneNumber from 'components/TripCard/PhoneNumber';
import { currentUser } from 'lib/helpers';

const styles = {
  root: {
    maxWidth: 900,
    margin: '0 auto'
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    width: 126,
    height: 126,
    backgroundColor: '#c4d5e4'
  },
  phone: {
    color: '#c2c2c2'
  },
  carPhoto: {
    width: '100%',
    height: 'auto',
    borderRadius: '16px',
    minHeight: '300px'
  },
  input: {
    display: 'none'
  }
};

const User = () => {
  const [isShow, showPhone] = React.useState(false);
  const { userId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser(userId));
  }, [userId, dispatch]);

  const { user, userLoading: loading, uploadLoading } = useSelector(state => state.helpers);

  const uploadFile = file => {
    const formData = new FormData();
    formData.append('file', file);
    dispatch(uploadCarPhoto({ id: userId, data: formData }));
	};

  return (
    <>
      <Grid container spacing={3} style={styles.root}>
        <Loader open={uploadLoading} />
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
        {user?.photo && (
          <Grid item xs={9}>
            <Avatar
              variant="square"
              src={`${process.env.REACT_APP_API_URL}/${user?.photo}`}
              style={styles.carPhoto}
              alt={`${user?.firstName} ${user?.lastName}`}
            />
          </Grid>
        )}
        <Grid item xs={3} style={styles.userInfo}>
          <Avatar src={user?.avatar} style={styles.avatar} />
          <Typography variant="h5">
            {loading ? <Skeleton animation="wave" height={50} /> : `${user?.firstName} ${user?.lastName}`}
          </Typography>
          <ButtonBase
            component={Typography}
            style={styles.phone}
            variant="h5"
            onClick={() => showPhone(true)}
          >
            {loading ? <Skeleton animation="wave" height={50} /> : user?.phone}
          </ButtonBase>
          {+userId === currentUser()?.id && (
            <div>
              <input
                accept="image/*"
                id="upload-car"
                type="file"
                name="file"
                style={styles.input}
                onChange={e => uploadFile(e.target?.files?.[0])}
              />
              <label htmlFor="upload-car">
                <Button
                  color="secondary"
                  component="span"
                  size="large"
                  startIcon={<Icon.Camera />}
                >
                  Көлік суретін жүктеу
                </Button>
              </label>
            </div>
          )}
        </Grid>
        <Grid item xs={12}>
          <Comment targetId={userId} type="user" />
        </Grid>
      </Grid>
      <PhoneNumber open={isShow} onClose={() => showPhone(false)} user={user} />
    </>
  );
};

export default User;