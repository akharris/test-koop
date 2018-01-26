const fetch = require('node-fetch')
const request = require('request')

function Model (koop) {
  Model.prototype.getData = function(req, callback) {
    console.log('getData called!')
    const url = 'https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json'

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
  disableIdParam: true,
  Model: Model,
  disabledIdParam: false
}
