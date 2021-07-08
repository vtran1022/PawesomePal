import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input, FormHelperText, TextField, MenuItem } from '@material-ui/core';

const Form = () => {
  return (
    <>
      <FormControl>
        <InputLabel htmlFor="human-name">Name:</InputLabel>
        <Input id="human-name"></Input>
        <FormHelperText id="human-name-helper-text">Required</FormHelperText>

        <TextField id="trait-select" label="Trait" value="20" select>
          <MenuItem value="10">Ten</MenuItem>
          <MenuItem value="20">Twenty</MenuItem>
        </TextField>

        <TextField id="species-select" label="Species" value="both" select>
          <MenuItem id="cat" value="cat">Cat</MenuItem>
          <MenuItem id="dog" value="dog">Dog</MenuItem>
          <MenuItem id="both" value="both">Both</MenuItem>
        </TextField>

        <TextField id="gender-select" label="Gender" value="both" select>
          <MenuItem id="male" value="M">M</MenuItem>
          <MenuItem id="female" value="F">F</MenuItem>
          <MenuItem id="both" value="both">Both</MenuItem>
        </TextField>
      </FormControl>
      <Button variant="contained" color="primary">
        Submit
      </Button>
    </>
  )
};

export default Form;

/*
Your Name:
Your Personality Trait:
Species: (Cat/Dog/Both)
Gender: (M/F/Both)
*/