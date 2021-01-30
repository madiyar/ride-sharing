import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const Header = () => (
  <Grid
    xs={12}
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL}/bg.svg)`,
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      textAlign: 'center',
      position: 'relative',
      color: '#fff',
      padding: `104px 0`,
      marginBottom: 24,
      borderRadius: 16
    }}
  >
    <span
      style={{
        position: 'absolute',
        right: 0,
        top: 0,
        left: 0,
        bottom: 0,
        background: `rgba(0,0,0,.6)`,
        padding: `64px 0`,
        borderRadius: 16
      }}
    >
      <Typography variant="h2" style={{ zIndex: 9999 }}>Жаңа тапсырыс</Typography>
    </span>
  </Grid>
);

export default Header;
