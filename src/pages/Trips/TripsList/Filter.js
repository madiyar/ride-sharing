import React, { useEffect, useState } from 'react';
import { Button, Card, createStyles, InputAdornment, makeStyles, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { DatePicker } from '@material-ui/pickers';
import { Icon } from 'components';
import { getCities } from 'store/helpers/actions';
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

const SelectCity = ({ label, ...props }) => (
  <Autocomplete
    getOptionLabel={(option) => option.name}
    groupBy={(option) => option.region}
    noOptionsText={'Қала табылмады'}
    loadingText={'Қалалар тізімі жүктеліп жатыр...'}
    autoHighlight
    fullWidth
    {...props}
    renderInput={(params) => (
      <TextField
        {...params}
        label={label}
        margin="normal"
        variant="outlined"
        InputProps={{
          ...params.InputProps,
          startAdornment: (
            <InputAdornment position="start">
              <Icon.MapPin size={16} />
            </InputAdornment>
          ),
        }}
      />
    )}
  />
);

const Filter = ({ loading, cities, getCities }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    from: null,
    to: null,
    date: null
  });

  useEffect(() => {
    if (!cities.length) {
      getCities();
    }
  }, [cities, getCities]);

  const handleDateChange = date => {
    setFormData({...formData, date: moment(date).format('YYYY-MM-DD')});
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <Card className={classes.card}>
      <SelectCity
        options={cities.filter(i => i !== formData.to)}
        loading={loading}
        value={formData.from}
        onChange={(_, city) => setFormData({...formData, from: city})}
        label="Қайдан?"
      />
      <SelectCity
        options={cities.filter(i => i !== formData.from)}
        loading={loading}
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
  loading: helpers.cities.loading,
  cities: helpers.cities.data,
});

export default connect(mapState, { getCities })(Filter);
