import React, { useEffect, useState } from 'react';
import { Button, Card, createStyles, InputAdornment, makeStyles, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { DatePicker } from '@material-ui/pickers';
import { Icon } from 'components';
import { getCities } from 'store/helpers/actions';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => createStyles({
  card: {
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  button: {
    margin: theme.spacing(2,0)
  }
}))

const SelectCity = ({ cities, label, loading }) => {
  return  (
    <Autocomplete
      options={cities}
      getOptionLabel={(option) => option.name}
      groupBy={(option) => option.region}
      noOptionsText={'Қала табылмады'}
      loadingText={'Қалалар тізімі жүктеліп жатыр...'}
      loading={loading}
      fullWidth
      autoHighlight
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
  )
}

const Filter = ({ loading, cities, getCities }) => {
  const classes = useStyles();
  const [selectedDate, handleDateChange] = useState(new Date());

  useEffect(() => {
    if (!cities.length) {
      getCities();
    }
  }, [cities]);

  return (
    <Card className={classes.card}>
      <SelectCity
        cities={cities}
        label="Қайдан?"
      />
      <SelectCity
        cities={cities}
        label="Қайда?"
        loading={loading}
      />
      <DatePicker
        showTodayButton
        inputVariant="outlined"
        format="DD.MM.YYYY"
        ampm={false}
        margin="normal"
        value={selectedDate}
        label="Қай күні?"
        onChange={handleDateChange}
        disabled={loading}
        disablePast
        fullWidth
      />
      <Button
        variant="contained"
        color="primary"
        startIcon={loading ? <Icon.Loader size={16} /> : <Icon.Search size={16} />}
        className={classes.button}
        disabled={loading}
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
