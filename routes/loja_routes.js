const express = require('express');
const  router = express.Router() 
const transactionsController = require('../controllers/lojaController');

router.get('/', transactionsController.getAllproducts);

router.post('/', transactionsController.addproducts);

router.put('/:id', transactionsController.updateproductsPut);

router.patch('/:id', transactionsController.updateproductsPatch);

router.delete('/:id', transactionsController.deleteproducts );



module.exports = router;