import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, FormControl, InputLabel, Input, FormHelperText, Select, MenuItem, Typography, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PetMatch from './PetMatch.jsx';

const useStyles = makeStyles((theme) => ({
  cell: {
    margin: 5,
    width: 200
  },
  paper: {
    width: 550,
    padding: theme.spacing(6),
    marginBottom: 20,
    backgroundColor: theme.palette.action.hover
  },
  subtitle: {
    color: theme.palette.info.main
  }
}));

const Form = () => {
  const [traitList, setTraitList] = useState([]);
  const [speciesList, setSpeciesList] = useState(['cat', 'dog', 'both']);
  const [genderList, setGenderList] = useState(['male', 'female', 'both']);
  const [formState, setFormState] = useState({
    trait: '',
    species: '',
    gender: ''
  });
  const [trait_id, setId] = useState(0);
  const [isDisabled, setDisabled] = useState(true);
  const [petInfo, setPet] = useState({});
  const classes = useStyles();

  const fetchTraits = () => {
    axios.get('/traits')
      .then((data) => setTraitList(data.data))
      .catch((err) => `Error retrieving traits: ${err}`);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormState({
      ...formState,
      [name]: value
    });

    name === 'trait'
      ? setId(value.slice(value.length - 1))
      : null;
  };

  const handleSubmit = () => {
    const params = {
      trait_id,
      type: formState.species,
      gender: formState.gender
    };

    axios.get('/petmatch', { params })
      .then((data) => {
        setPet(data.data);
      })
      .catch((err) => `Error retrieving pet: ${err}`);
  }

  useEffect(() => {
    fetchTraits();
  }, []);

  useEffect(() => {
    const formValues = Object.values(formState);
    const filterValues = formValues.filter((value) => value !== '');

    filterValues.length === 4
      ? setDisabled(false)
      : null;
  }, [formState]);

  return (
    <>
    <Grid container justifyContent="center">
      <Paper className={classes.paper}>
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <Typography variant="h6" className={classes.subtitle}>
              The hooman
            </Typography>

            <Typography variant="subtitle2">
              Tell us your name and a trait that best describes you
            </Typography>

            <form>
              <FormControl className={classes.cell}>
                <InputLabel id="name-label">Name</InputLabel>
                <Input
                  id="name-input"
                  onChange={handleChange}
                  inputProps={{ name: 'name' }}
                  >
                  {formState.name}
                </Input>
              </FormControl>

              <FormControl className={classes.cell}>
                <InputLabel id="trait-label">Trait</InputLabel>
                <Select
                  labelId="trait-label"
                  id="trait-select"
                  value={formState.trait}
                  onChange={handleChange}
                  inputProps={{ name: 'trait' }}
                  >
                  {traitList !== 0
                    ? [traitList.map((trait) => (
                      <MenuItem
                      key={`${20 * trait.id}${trait.trait}`}
                      value={`${trait.trait}${trait.id}`}
                      >
                        {trait.trait}
                      </MenuItem>
                      ))]
                      : <MenuItem id="holder"></MenuItem>
                    }
                </Select>
              </FormControl>
            </form>
          </Grid>

          <Grid item>
            <Typography variant="h6" style={{ 'marginTop': 10 }} className={classes.subtitle}>
              The soon-to-be pal
            </Typography>

            <Typography variant="subtitle2">
              Let us know what you seek in your pawesome pal
            </Typography>

            <form>
              <FormControl className={classes.cell}>
                <InputLabel id="species-label">Species</InputLabel>
                <Select
                  labelId="species-label"
                  id="species-select"
                  value={formState.species}
                  onChange={handleChange}
                  inputProps={{ name: 'species' }}
                  >
                  {speciesList.map((animal, i) => (
                    <MenuItem
                      key={`${animal}${20*i}`}
                      value={animal}
                    >
                      {animal}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl className={classes.cell}>
                <InputLabel id="gender-label">Gender</InputLabel>
                <Select
                  labelId="gender-label"
                  id="gender-select"
                  value={formState.gender}
                  onChange={handleChange}
                  inputProps={{ name: 'gender' }}
                >
                  {genderList.map((gender, i) => (
                      <MenuItem
                        key={`${gender}${20*i}`}
                        value={gender}
                      >
                        {gender}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </form>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={isDisabled}
            style={{ "marginTop": 20 }}
          >
            Submit
          </Button>
          </Grid>

        </Grid>
      </Paper>
    </Grid>

    <PetMatch
      name={formState.name}
      pet={petInfo}
    />
    </>
  )
};

export default Form;