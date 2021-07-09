import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, FormControl, InputLabel, Input, FormHelperText, Select, MenuItem } from '@material-ui/core';
import PetMatch from './PetMatch.jsx';

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
  const [ifMatch, setMatch] = useState(false);
  const [isDisabled, setDisabled] = useState(true);

  const fetchTraits = () => {
    axios.get('/traits')
      .then((data) => setTraitList(data.data))
      .catch((err) => `Error retrieving traits: ${err}`);
  };

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });

    if (event.target.name === 'trait') {
      const value = event.target.value;
      const len = value.length - 1;
      setId(value.slice(len));
    }
  };

  const handleSubmit = () => {
    setMatch(true);

    axios.get('/petmatch')
  }

  useEffect(() => {
    fetchTraits();
  }, []);

  useEffect(() => {
    const formValues = Object.values(formState);
    const filterValues = formValues.filter((value) => value !== '');

    filterValues.length === 3
      ? setDisabled(false)
      : null;

  }, [formState]);

  return (
    <>
      <FormControl>
        <InputLabel id="name-label">Name:</InputLabel>
        <Input id="name"></Input>
      </FormControl>

      <FormControl>
        <InputLabel id="trait-label">Trait</InputLabel>
        <Select
          labelId="trait-label"
          id="trait-select"
          value={formState.trait}
          onChange={handleChange}
          inputProps={{
            name: 'trait'
          }}
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

      <FormControl>
        <InputLabel id="species-label">Species</InputLabel>
        <Select
          labelId="species-label"
          id="species-select"
          value={formState.species}
          onChange={handleChange}
          inputProps={{
            name: 'species'
          }}
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

      <FormControl>
        <InputLabel id="gender-label">Gender</InputLabel>
        <Select
          labelId="gender-label"
          id="gender-select"
          value={formState.gender}
          onChange={handleChange}
          inputProps={{
            name: 'gender'
          }}
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

      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        disabled={isDisabled}
      >
        Submit
      </Button>

      {ifMatch
        ? <PetMatch />
        : null
      }
    </>
  )
};

export default Form;