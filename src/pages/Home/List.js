import React from 'react';
import { Avatar, Button, Card, CardActions, createStyles, Grid, List, ListItem, ListItemAvatar, ListItemText, makeStyles, Typography } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { Icon } from 'components';

const useStyles = makeStyles(theme => createStyles({
  title: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2)
  },
  user: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  pagination: {
    marginTop: theme.spacing(3),
    justifyContent: 'center'
  }
}));

const Item = ({ icon, title, value }) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>{icon}</Avatar>
      </ListItemAvatar>
      <ListItemText primary={title} secondary={value} />
    </ListItem>
  );
};

const ShareList = () => {
  const classes = useStyles();

  return (
    <>
      <Card elevation={2}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={7}>
            <Typography className={classes.title} variant="h5">
              Алматы <Icon.ArrowRight size={20} /> Семей
            </Typography>
            <List>
              <Item
                icon={<Icon.Calendar />}
                title="Шығу уақыты"
                value="Jan 9, 2014"
              />
              <Item
                icon={<Icon.Users />}
                title="Бос орын саны"
                value="5"
              />
              <Item
                icon={<Icon.DollarSign />}
                title="Бағасы"
                value="5000 тг/орын"
              />
            </List>
          </Grid>
          <Grid item xs={5} className={classes.user}>
            <Avatar className={classes.avatar}>
              <Icon.User size={70} />
            </Avatar>
            <Typography>Мадияр Болатов</Typography>
          </Grid>
        </Grid>
        <CardActions>
          <Button size="small" color="primary" startIcon={<Icon.Phone size={16} />}>
            Телефон нөмірі
          </Button>
        </CardActions>
      </Card>
      <Pagination
        count={10}
        variant="outlined"
        color="primary"
        shape="rounded"
        classes={{ ul: classes.pagination }}
      />
    </>
  )
}

export default ShareList;
