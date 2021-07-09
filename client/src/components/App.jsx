import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Form from './Form.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.light
  }
}));


const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Icon className="fas fa-cat" style={{ 'marginRight': 30 }}></Icon>
        <Typography variant="h1" color="primary">Pawesome Pal</Typography>
        <Icon className="fas fa-dog" style={{ 'marginLeft': 30 }}></Icon>
      </Grid>

      <Form />
    </div>
  )
};

export default App;