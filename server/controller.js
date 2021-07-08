const { fetchPersonality, fetchAdditionalInfo } = require('../db/queries.js');

const petMatch = (req, res) => {
  fetchPersonality(req.body.trait)
    .then((id) => {
      fetchAdditionalInfo([id, req.body.type])
      .then((breeds) => {
        res.send(`data data ${breeds}`);
      })
    })
    .catch((err) => res.send(`Error ${err}`));
};

module.exports = {
  petMatch
}