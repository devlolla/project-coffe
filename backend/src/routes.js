const express = require('express')

const routes = express.Router()

const newPedido = require('./controller/newPedido')


routes.get('/request', newPedido.index)
routes.post('/request', newPedido.create)

module.exports = routes;