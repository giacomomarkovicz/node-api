const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

routes.get('/produtos', ProductController.index);
routes.post('/produtos', ProductController.store);
routes.get('/produtos/:id', ProductController.show);
routes.put('/produtos/:id', ProductController.update);
routes.delete('/produtos/:id', ProductController.destroy);

module.exports = routes;
