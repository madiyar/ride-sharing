import React, { useState } from 'react';
import { Button, Card, createStyles, InputAdornment, makeStyles, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { DatePicker } from '@material-ui/pickers';
import { Icon } from 'components';

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

const cities = [
  {
    name: 'Almaty',
    state: 'Almaty',
  },
  {
    name: 'Taldykorgan',
    state: 'Almaty',
  },
  {
    name: 'Oskemen',
    state: 'VKO',
  },
  {
    name: 'Semei',
    state: 'VKO',
  },
];

const SelectCity = ({ cities, label }) => {
  return  (
    <Autocomplete
      options={cities}
      getOptionLabel={(option) => option.name}
      groupBy={(option) => option.state}
      noOptionsText={'Қала табылмады'}
      // loadingText={'Қалалар тізімі жүктеліп жатыр...'}
      // loading={true}
      fullWidth
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

const Filter = () => {
  const classes = useStyles();
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <Card className={classes.card}>
      <SelectCity
        cities={cities}
        label="Қайдан?"
      />
      <SelectCity
        cities={cities}
        label="Қайда?"
      />
      <TextField
        label="Неше адам?"
        type="number"
        variant="outlined"
        margin="normal"
        defaultValue={1}
        InputProps={{
          inputProps: { min: 1, max: 10 },
          startAdornment: (
            <InputAdornment position="start">
              <Icon.Users size={16} />
            </InputAdornment>
          ),
        }}
        fullWidth
      />
      
      <DatePicker
        showTodayButton
        inputVariant="outlined"
        format="DD/MM/YYYY"
        ampm={false}
        margin="normal"
        value={selectedDate}
        label="Қай күні?"
        onChange={handleDateChange}
        disabled
        fullWidth
      />
      <Button
        variant="contained"
        color="primary"
        startIcon={<Icon.Search size={16} />}
        className={classes.button}
      >
        Іздеу
      </Button>
    </Card>
  )
}

export default Filter;
