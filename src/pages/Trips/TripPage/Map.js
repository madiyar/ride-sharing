import React from 'react';
import { Skeleton } from "@material-ui/lab";
import { Card, CardContent, Typography } from '@material-ui/core';
import { Icon } from 'components';

const styles = {
  card: {
    marginTop: 16
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 16
  },
  icon: {
    marginRight: 8
  }
};

export default ({ city, url, loading }) => (
  <Card style={styles.card}>
    <CardContent>
      <Typography variant="h6" style={styles.title}>
        <Icon.MapPin style={styles.icon} />
        {loading ? (
          <Skeleton animation="wave" height={10} width="80%" />
        ) : city}
      </Typography>

      {loading ? (
        <Skeleton animation="wave" variant="rect" height={400}/>
      ) : (
        <div style={{ position:'relative', overflow:'hidden' }}>
          <iframe
            src={url}
            width="100%"
            height="400"
            frameBorder="0"
            title={city}
            allowFullScreen={true}
            style={{ position:'relative' }}
            loading="lazy"
          ></iframe>
        </div>
      )}
    </CardContent>
  </Card>
);
