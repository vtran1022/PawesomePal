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
    width: 450,
    height: 450,
    borderRadius: 30
  }
}));

const PetMatch = ({ name, pet }) => {
  const [isLoaded, setLoaded] = useState(false);
  const [isTimed, setTime] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    Object.keys(pet).length !== 0
      ? setLoaded(true)
      : null;
  }, [pet]);

  useEffect(() => {
    console.log(isLoaded);

    isLoaded === true
      ? setTimeout(() => {
          setTime(true);
        }, 2000)
      : null;
  }, [isLoaded]);

  return (
    <>
    {isLoaded
      ? <Grid container justifyContent="center">
          <Paper className={classes.paper}>
            {isTimed
              ? <Grid container direction="column" alignItems="center">
                  <Typography variant="body1">
                    <Grid item>Congratulations {name}! &nbsp; <i>-drumroll-</i></Grid>
                    <br></br>
                    <Grid item>Your pawesome pal is <b>{pet.name}</b>!</Grid>
                  </Typography>

                  <img className={classes.img} src={pet.primary_photo_cropped ? pet.primary_photo_cropped.large : errimage}></img>

                  <Typography variant="body1">{pet.description}</Typography>
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
              : <Grid container justifyContent="center">
                  <Typography variant="body1">
                    Congratulations {name}! &nbsp; <i>-drumroll-</i>
                    <br></br>
                    <Grid item>
                      <Icon className="fas fa-paw" style={{ 'marginRight': 5 }}></Icon>
                      <Icon className="fas fa-paw" style={{ 'marginRight': 5 }}></Icon>
                      <Icon className="fas fa-paw" style={{ 'marginRight': 5 }}></Icon>
                      <Icon className="fas fa-paw" style={{ 'marginRight': 5 }}></Icon>
                      <Icon className="fas fa-paw" style={{ 'marginRight': 5 }}></Icon>
                      <Icon className="fas fa-paw" style={{ 'marginRight': 5 }}></Icon>
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