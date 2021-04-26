import React from 'react';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';
import moment from 'moment';

const Day = ({ value, setValue, user }) => (
  <Grid item xs={12} md={4}>
    <Card>
      <CardContent>
        <Typography variant="h4">Қай күні?</Typography>
        <DatePicker
          showTodayButton
          inputVariant="outlined"
          format="DD.MM.YYYY"
          ampm={false}
          margin="normal"
          value={value}
          label="Қай күні?"
          onChange={date => setValue(moment(date).format('YYYY-MM-DD'))}
          disabled={!user}
          disablePast
          fullWidth
        />
      </CardContent>
    </Card>
  </Grid>
);

export default Day;
