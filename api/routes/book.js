const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authenticate')

const bookController = require('../controllers/book')

router.get('/',bookController.getAllBookController)

//post route
router.post('/',authenticate, bookController.postNewBookController)

router.get('/:id',bookController.getSingleBookController)

router.put('/:id',authenticate, bookController.editBookController)

router.delete('/:id',authenticate, bookController.deleteContactController)

module.exports = router