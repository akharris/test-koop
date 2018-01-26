const request = require('request')

function Model (koop) {
  Model.prototype.getData = function(req, callback) {
    const url = 'https://raw.githubusercontent.com/'

    // pull id from req.pram
    // const id = req.param.id
    const id = 'johan/world.geo.json/master/countries.geo.json'
    request(url, (err, res, body) => {
      if (err) return callback(err)
      const json = JSON.parse(res.body)
      callback(null, json)
    })
  }
}

module.exports = {
  name: 'sample',
  type: 'provider',
  version: '0.0.1',
  Model: Model,
}
