var express = require('express');
var router = express.Router();
var user = require('../controller/usercontroller');


router.post('/',user.insert);
router.get('/getData', user.get_data);

router.post('/cat', user.city_insert);
router.get('/cat', user.get_city);



router.get('/delete/:id',user.delete_data);
router.post('/update/:id', user.update_data);



module.exports = router;
