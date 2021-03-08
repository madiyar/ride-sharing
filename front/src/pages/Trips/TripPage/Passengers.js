import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Card, CardContent, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';
import { Icon, ConfirmPassenger } from 'components';

const styles = {
  card: { marginBottom: 16 },
  content:{ flexDirection: 'column', display: 'flex' },
  title: { display: 'flex', alignItems: 'center' },
  icon: { marginRight: '8px' },
  btn: { alignSelf: 'center' }
};

export default ({ list, seats, user, isCurrent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch();
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
            {list?.map(user => (
              <ListItem key={`passenger-${user.id}`} disableGutters>
                <ListItemAvatar>
                  <Avatar src={user?.avatar} />
                </ListItemAvatar>
                <ListItemText
                  primary={`${user.firstName} ${user.lastName}`}
                />
              </ListItem>
            ))}
          </List>
          {seats > list?.length && !isCurrent && (
            <Button
              variant="contained"
              color="primary"
              size="large"
              style={styles.btn}
              onClick={() => setIsOpen(true)}
              disabled={!user}
            >
              Жолаушы болу
            </Button>
          )}
        </CardContent>
      </Card>
    </>
  );
};
