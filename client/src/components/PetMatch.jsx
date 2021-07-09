import React, { useEffect, useState } from 'react';
import errimage from './imagenot.png';
import { Typography, Paper, Grid, Button } from '@material-ui/core';
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

const PetMatch = ({ name, pet }) => {
  const [isLoaded, setLoaded] = useState(false);
  const [isTimed, setTime] = useState(false);
  const classes = useStyles();

  const refreshPage = () => {
    window.location.reload();
  };

  useEffect(() => {
    Object.keys(pet).length !== 0
      ? setLoaded(true)
      : null;
  }, [pet]);

  useEffect(() => {
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

                  <Button
                    variant="contained"
                    color="primary"
                    onClick={refreshPage}
                    style={{ "marginTop": 20 }}
                  >
                    Refresh
                  </Button>

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