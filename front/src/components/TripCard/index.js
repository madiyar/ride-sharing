import React, { useState } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  IconButton,
  List,
  Typography,
  ButtonBase
} from '@material-ui/core';
import { Icon } from 'components';

import useStyles from './useStyles';
import LoadingTrip from './LoadingTrip';
import PhoneNumber from './PhoneNumber';
import ListItem from './ListItem';
import { getUserInitials } from 'lib/helpers';

const TripCard = ({ trip, loading, showLink }) => {
  const classes = useStyles();
  const [showPhone, setShowPhone] = useState(false);

  return loading ? (
    <LoadingTrip />
  ) : trip ? (
    <>
      <PhoneNumber
        open={showPhone}
        onClose={() => setShowPhone(false)}
        user={trip.driver}
      />
      <Card>
        <CardHeader
          avatar={<Avatar>{getUserInitials(trip.driver.firstName, trip.driver.lastName)}</Avatar>}
          title={
            <Link
              to={`/user/${trip.driver.id}`}
              component={ButtonBase}
            >
              {trip.driver.firstName} {trip.driver.lastName}
            </Link>
          }
          action={
            <IconButton onClick={() => setShowPhone(true)}>
              <Icon.Phone />
            </IconButton>
          }
        />
        <CardActionArea
          component={Link}
          to={`trip/${trip.id}`}
          disabled={!showLink}
        >
          <CardContent>
            <Typography className={classes.title} variant="h5">
              {trip?.from?.name} <Icon.ArrowRight size={20} /> {trip?.to?.name}
            </Typography>
            <List>
              <ListItem
                icon={<Icon.Calendar />}
                title="Шығу уақыты"
                value={moment(trip?.day).format('DD.MM.YYYY, H:mm')}
              />
              <ListItem
                icon={<Icon.Users />}
                title="Барлық орын саны"
                value={trip?.seats}
              />
              <ListItem
                icon={<Icon.DollarSign />}
                title="Бағасы"
                value={`${trip?.price} тг/орын`}
              />
            </List>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  ) : null;
};

export default TripCard;
