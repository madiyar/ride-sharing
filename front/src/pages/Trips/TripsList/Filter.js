import React, { useState } from 'react';
import { Button, Card, createStyles, makeStyles } from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';
import { Icon, SelectCity } from 'components';
import { connect } from 'react-redux';
import moment from 'moment';

const useStyles = makeStyles(theme => createStyles({
  card: {
    borderRadius: theme.spacing(1),
    padding: theme.spacing(6),
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  button: {
    margin: theme.spacing(2, 0),
    padding: theme.spacing(1, 4),
    borderRadius: '999rem',
  }
}))

const Filter = ({ loading }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    from: null,
    to: null,
    date: null
  });

  const handleDateChange = date => {
    setFormData({...formData, date: moment(date).format('YYYY-MM-DD')});
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <Card className={classes.card}>
      <SelectCity
        city={formData.to}
        value={formData.from}
        onChange={(_, city) => setFormData({...formData, from: city})}
        label="Қайдан?"
      />
      <SelectCity
        city={formData.from}
        value={formData.to}
        onChange={(_, city) => setFormData({...formData, to: city})}
        label="Қайда?"
      />
      <DatePicker
        showTodayButton
        inputVariant="outlined"
        format="DD.MM.YYYY"
        ampm={false}
        margin="normal"
        value={formData.date}
        label="Қай күні?"
        onChange={handleDateChange}
        disabled={loading}
        disablePast
        fullWidth
      />
      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={loading ? <Icon.Loader size={16} /> : <Icon.Search size={16} />}
        className={classes.button}
        disabled={loading}
        onClick={() => handleSubmit()}
      >
        Іздеу
      </Button>
    </Card>
  )
}

const mapState = ({ helpers }) => ({
  loading: helpers.cities.loading
});

export default connect(mapState, {})(Filter);
