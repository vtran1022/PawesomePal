import React, { useEffect, useState } from 'react';
import errimage from './imagenot.png';
import { Typography, Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 550,
    padding: theme.spacing(6),
    backgroundColor: theme.palette.action.hover
  },
  img: {
    width: 470,
    height: 470,
    borderRadius: 30
  }
}));

  const name = "Fred";
  const pet = {
    name: "Bella",
    description: "Available for Adoption \n“Bella”\n\n2 year 8 lb scruffy mix female. Chihuahua Yorkie  mix .She is a little reserved but...",
    url: "https://www.petfinder.com/dog/bella-52288656/ky/winchester/fairytails-pet-adoptions-ky550/?referrer_id=4491b933-8254-4a5d-856b-8c34ef9bb017",
    breeds: { primary: "Yorkshire Terrier" },
    age: "young",
    gender: "female",
    size: "small",
    primary_photo_cropped: { large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/52288656/3/?bust=1625793457&width=600" }
  };

const PetMatch = ({  }) => {
  const [isLoaded, setLoaded] = useState(true);
  const [isTimed, setTime] = useState(true);
  const classes = useStyles();

  // useEffect(() => {
  //   Object.keys(pet).length !== 0
  //     ? setLoaded(true)
  //     : null;
  // }, [pet]);

  // useEffect(() => {
  //   console.log(isLoaded);

  //   isLoaded === true
  //     ? setTimeout(() => {
  //         setTime(true);
  //       }, 2000)
  //     : null;
  // }, [isLoaded]);

  return (
    <>
    {isLoaded
      ? <Grid container justifyContent="center">
          <Paper className={classes.paper}>
            {isTimed
              ? <Grid container direction="column" alignItems="center">
                  <Typography variant="body1">
                    <Grid item container justifyContent="center">
                      Congratulations {name}!
                    </Grid>
                    <br></br>
                    <Grid item>
                      Your pawesome pal is <b>{pet.name}</b>!
                    </Grid>
                  </Typography>

                  <img className={classes.img} src={pet.primary_photo_cropped ? pet.primary_photo_cropped.large : errimage}></img>

                  <Typography variant="body1">
                    <Grid item style={{ 'width': 450 }}>
                      {pet.description}
                    </Grid>
                  </Typography>
                  <br></br>
                  <Typography variant="body2">
                    <b>Breed:</b> {pet.breeds.primary}
                    <br></br>
                    <b>Age:</b> {pet.age}
                    <br></br>
                    <b>Gender:</b> {pet.gender}
                    <br></br>
                    <b>Size:</b> {pet.size}
                    <br></br>
                    <br></br>
                    For more information, please <a href={pet.url}>click here.</a> You will be redirected to petFinder.
                  </Typography>
                </Grid>
              : <Grid container justifyContent="center" alignItems="center">
                  <Typography variant="body1">
                    <Grid item container justifyContent="center">
                      Congratulations {name}!
                    </Grid>
                      <br></br>
                    <Grid item container justifyContent="center">
                      <i>-drumroll-</i>
                    </Grid>
                    <br></br>
                    <Grid item container justifyContent="center">
                      <Icon className="fas fa-paw" style={{ 'marginRight': 5 }}></Icon>
                      <Icon className="fas fa-paw" style={{ 'marginRight': 5 }}></Icon>
                      <Icon className="fas fa-paw"></Icon>
                    </Grid>
                  </Typography>
                </Grid>
            }
          </Paper>
        </Grid>
      : null
    }
    </>
  )
};

export default PetMatch;