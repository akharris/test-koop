const Koop = require('koop')
const koop = new Koop()

const provider = require('./provider')

koop.register(provider)

koop.server.listen(8000)
