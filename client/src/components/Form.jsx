import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input, FormHelperText, Select, MenuItem } from '@material-ui/core';

const Form = () => {
  return (
    <>
      <FormControl>
        <InputLabel id="name-label">Name:</InputLabel>
        <Input id="name"></Input>
        <FormHelperText id="name-helper-text">Required</FormHelperText>
      </FormControl>

      <FormControl>
        <InputLabel id="trait-label">Trait</InputLabel>
        <Select labelId="trait-label" id="trait-select" value="20">
          <MenuItem value="10">Ten</MenuItem>
          <MenuItem value="20">Twenty</MenuItem>
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel id="species-label">Species</InputLabel>
        <Select labelId="species-label" id="species-select" value="both">
          <MenuItem id="cat" value="cat">Cat</MenuItem>
          <MenuItem id="dog" value="dog">Dog</MenuItem>
          <MenuItem id="both" value="both">Both</MenuItem>
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel id="gender-label">Gender</InputLabel>
        <Select labelId="gender-label" id="gender-select" value="both">
          <MenuItem id="male" value="M">M</MenuItem>
          <MenuItem id="female" value="F">F</MenuItem>
          <MenuItem id="both" value="both">Both</MenuItem>
        </Select>
      </FormControl>

      <Button variant="contained" color="primary">
        Submit
      </Button>
    </>
  )
};

export default Form;