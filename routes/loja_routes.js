const express = require('express');
const  routers = express.Router() 
const lojaController = require('../controllers/lojaController');

router.get('/', lojaController.getAllproducts);

router.post('/', lojaController.addproducts);

router.put('/':id, lojaController.updateproductsPut);

router.patch('/':id, lojaController.updateproductsPatch);

router.delete('/':id, lojaController.deleteproducts );



module.exports=router