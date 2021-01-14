const router = require('express').Router();
const user = require('./users');

router.get('/',(req,res,next)=>{
    res.render('searchusers');
})

router.post('/user/search',user.search);
router.get('/user/add',user.addUserForm);
router.post('/user/add',user.addUser);
router.delete('/user/delete/:id',user.deleteUser)

// router.get('/',expense.getExpenses);

module.exports = router;