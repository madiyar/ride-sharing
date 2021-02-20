import React from 'react';
import { Avatar, Button, Card, CardContent, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';
import { Icon } from 'components';
import { getUserInitials } from 'lib/helpers';

const styles = {
  content:{ flexDirection: 'column', display: 'flex' },
  title: { display: 'flex', alignItems: 'center' },
  icon: { marginRight: '8px' },
  btn: { alignSelf: 'center' }
};

const Passengers = ({ list, seats, user }) => (
  <Card>
    <CardContent style={styles.content}>
      <Typography variant="h6" style={styles.title}>
        <Icon.Users style={styles.icon} />
        Жолаушылар
      </Typography>
      <List>
        {list?.map(user => (
          <ListItem key={`passenger-${user.id}`} disableGutters>
            <ListItemAvatar>
              <Avatar>
                {getUserInitials(user.firstName, user.lastName)}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={`${user.firstName} ${user.lastName}`}
            />
          </ListItem>
        ))}
      </List>
      {seats > list?.length && (
        <Button
          variant="contained"
          color="primary"
          size="large"
          style={styles.btn}
          disabled={!user}
        >
          Жолаушы болу
        </Button>
      )}
    </CardContent>
  </Card>
);

export default Passengers;
