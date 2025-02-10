const connection = require('../data/db')

const index = (req, res) => {
  res.send('lista dei film')
}

const show = (req, res) => {
  res.send(`mostro il dettaglio del film con id ${req.params.id}`)
}

module.exports = {
  index,
  show
}