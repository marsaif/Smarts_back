var express = require('express');
var router = express.Router();
var userController =  require('../controller/UserController')

/* GET users listing. */
router.get('/',userController.getAll);
router.post('/',userController.signUp);
router.post('/login',userController.signIn);
router.put('/activate',userController.activateCode);
router.put('/:id',userController.updateProfile);



module.exports = router;
