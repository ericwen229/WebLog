module.exports = function () {
  return function (req, res, next) {

    res.ok = function (data) {
      this.status(200).json(data)
    }

    next()
  }
}
