const connection = require('../data/db')

const index = (req, res) => {

  //compongo la query
  const sql = 'SELECT * FROM movies'

  // connessione al database
  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: 'query fallita' })
    const imagePath = 'http://localhost:3000/imgs/'
    const movies = results.map(movie => {
      return {
        ...movie,
        image: imagePath + movie.title.toLowerCase().replace(/\s+/g, '_') + '.jpg'
      }
    })
    res.json(movies)
  })

}

const show = (req, res) => {
  const id = req.params.id
  const sql = 'SELECT * FROM movies WHERE id=?'
  const reviewsSql = 'SELECT * FROM reviews WHERE movie_id = ?'
  const imagePath = 'http://localhost:3000/imgs/'
  connection.query(sql, [id], (err, results) => {

    if (err) return res.status(500).json({ error: 'query fallita' })
    if (results.length === 0) return res.status(404).json({ error: 'film non trovato' })

    const movie = results[0];


    connection.query(reviewsSql, [id], (err, reviewsResults) => {
      if (err) return res.status(500).json({ error: 'query fallita' })
      if (results.length === 0) return res.status(404).json({ error: 'film non trovato' })

      movie.reviews = reviewsResults
      movie.image = imagePath + movie.title.toLowerCase().replace(/\s+/g, '_') + '.jpg'
      res.json(movie)
    })


  })
}

module.exports = {
  index,
  show
}