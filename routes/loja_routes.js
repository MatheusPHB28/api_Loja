const express = require('express');
const  routers = express.Router() 
const lojaController = require('../controllers/lojaController');

routers.get('/', lojaController.getAllTransactions);



module.exports=routers