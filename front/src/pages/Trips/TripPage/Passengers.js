import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, ButtonBase, Card, CardContent, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';
import { Skeleton } from "@material-ui/lab";
import { Icon, ConfirmPassenger } from 'components';
import { useParams } from 'react-router';
import { addPassenger } from 'store/trips/actions';
import { Link } from 'react-router-dom';

const styles = {
  card: { marginBottom: 16 },
  content:{ flexDirection: 'column', display: 'flex' },
  title: { display: 'flex', alignItems: 'center' },
  icon: { marginRight: '8px' },
  btn: { alignSelf: 'center' }
};

export default ({ loading, list, seats, user, isCurrent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { tripId } = useParams();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addPassenger({ tripId, userId: user?.id }));
    setIsOpen(false);
  };

  return (
    <>
      <ConfirmPassenger
        open={isOpen}
        onClose={() => setIsOpen(false)}
        handleSubmit={handleSubmit}
      />
      <Card style={styles.card}>
        <CardContent style={styles.content}>
          <Typography variant="h6" style={styles.title}>
            <Icon.Users style={styles.icon} />
            Жолаушылар
          </Typography>
          <List>
            {loading ? [0,1].map(item => (
              <ListItem key={`passenger-load-${item}`} disableGutters>
                <ListItemAvatar>
                  <Skeleton animation="wave" variant="circle" width={40} height={40} />
                </ListItemAvatar>
                <ListItemText
                  primary={<Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />}
                />
              </ListItem>
            )) : list?.length ? list?.map(user => (
              <ListItem key={`passenger-${user.id}`} disableGutters>
                <ListItemAvatar>
                  <Avatar src={user?.avatar} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <ButtonBase
                      to={`/user/${user?.id}`}
                      component={Link}
                    >
                      {user?.firstName} {user?.lastName}
                    </ButtonBase>
                  }
                />
              </ListItem>
            )) : (
              <ListItem disableGutters>
                <ListItemAvatar><Avatar /></ListItemAvatar>
                <ListItemText primary="Жолаушы жоқ" />
              </ListItem>
            )}
          </List>
          {seats > list?.length && !isCurrent && (
            <Button
              variant="contained"
              color="primary"
              size="large"
              style={styles.btn}
              onClick={() => setIsOpen(true)}
              disabled={!user || !!list.filter(item => item.id === user.id).length}
            >
              Жолаушы болу
            </Button>
          )}
        </CardContent>
      </Card>
    </>
  );
};
