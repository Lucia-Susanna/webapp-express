const notfound = (res, req, next) => {
  res.status(404)
  res.json({
    message: 'Source  not found',
    status: 404,
    error: 'Not Found'
  })
}

module.exports = notfound