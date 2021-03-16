import React from 'react';
import { Card, CardContent, Typography, Link } from '@material-ui/core';
import { Icon } from 'components';

const styles = {
  content: {
    paddingBottom: '16px'
  },
  title: {
    display: 'flex',
    alignItems: 'center'
  },
  icon: {
    marginRight: 8
  }
};

export default ({ from, to }) => (
  <Card>
    <CardContent style={styles.content}>
      <Typography
        variant="h6"
        style={styles.title}
        component={Link}
        href={`https://www.google.com/maps/dir/${from}/${to}`}
        target="_blank"
      >
        <Icon.Map style={styles.icon} />
        Маршрут
      </Typography>
    </CardContent>
  </Card>
);
