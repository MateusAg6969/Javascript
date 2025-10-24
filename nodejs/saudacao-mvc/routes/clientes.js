const express = require ('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');

router.get('/', clientesController.clientes);
router.get('/login', clientesController.login);
router.post('/autenticar', clientesController.autenticar);

module.exports = router;