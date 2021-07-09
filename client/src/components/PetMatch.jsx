import React, { useEffect, useState } from 'react';
import errimage from './imagenot.png';
import { Typography, Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const pet = {
  name: "Happy",
  primary_photo_cropped: { large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/52275445/1/?bust=1625708137&width=600"},
  breeds: { primary: "Chihuahua" },
  age: "Young",
  gender: "Male",
  size: "Medium",
  description: "Lucky happy going happy papper",
  url: "https://www.petfinder.com/dog/happy-52275445/ny/wappingers-falls/compassionate-animal-rescue-of-dutchess-county-ny1375/?referrer_id=4491b933-8254-4a5d-856b-8c34ef9bb017"
};

const name = "Fred";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 600,
    padding: theme.spacing(3)
  }
}));

const PetMatch = ({  }) => {
  const [isLoaded, setLoaded] = useState(true);
  const classes = useStyles();

  // useEffect(() => {
  //   Object.keys(pet).length !== 0
  //     ? setLoaded(true)
  //     : null;
  // }, [pet]);

  return (
    <>
    {isLoaded
      ? <>
        <Grid container justifyContent="center">
          <Paper className={classes.paper}>
            <Typography variant="body1">
              Congratulations {name}! &nbsp; <i>-drumroll-</i> &nbsp; Your pawesome pal is {pet.name}!
            </Typography>

            <img src={pet.primary_photo_cropped ? pet.primary_photo_cropped.large : errimage}></img>

            <Typography variant="body1">{pet.description}</Typography>

            <Typography variant="body2">
              Breed: {pet.breeds.primary}
              Age: {pet.age}
              Gender: {pet.gender}
              Size: {pet.size}
              <br></br>
              <br></br>
              For more information, please <a href={pet.url}>click here.</a> You will be redirected to petFinder.
            </Typography>
          </Paper>
        </Grid>
        </>
      : null
    }
    </>
  )
};

export default PetMatch;