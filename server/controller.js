const { fetchPersonality } = require('../db/queries.js');

const petMatch = (req, res) => {
  const trait = req.query.trait;
  fetchPersonality(trait)
    .then((data) => {
      res.send(`data data`);
    })
    .catch((err) => res.send(`Error ${err}`));
};

module.exports = {
  petMatch
}