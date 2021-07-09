import React, { useEffect, useState } from 'react';
import errimage from './imagenot.png';
import { Typography } from '@material-ui/core';

const PetMatch = ({ name, pet }) => {
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    Object.keys(pet).length !== 0
      ? setLoaded(true)
      : null;
  }, [pet]);

  return (
    <>
    {isLoaded
      ? <>
        <Typography variant="body1">
          Congratulations {name}! <i>-drumroll-</i> &nbsp; Your pawesome pal is {pet.name}!
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
        </>
      : null
    }
    </>
  )
};

export default PetMatch;