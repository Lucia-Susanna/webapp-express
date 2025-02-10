const express = require('express')
const errorsHandler = require('./middleware/errorsHandler')
const notfound = require('./middleware/notFound')


const app = express()
const port = 3000
const moviesRouter = require('./routes/movies')

app.use(express.json())

app.get('/', (req, res) => {
  res.send('server funzionante')
})

app.use('/movies', moviesRouter)

app.use(errorsHandler)
app.use(notfound)

app.listen(port, () => {
  console.log(`sono in ascolto alla porta ${port}`);
})
