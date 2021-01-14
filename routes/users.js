const db = require('../dbClass').getConnection();


const search = async (req,res,next) => {
    const id = req.body.id;
    db.hgetall(id, (err, data) => {
        if (!data) {
            res.render('searchusers', {
                error: 'User does not exist'
            })
        } else {
            data.id = id;
            res.render('details', {
                user: data
            })
        }
    });
}


const addUserForm = async(req,res,next)=> {
    res.render('adduser');
}

const addUser = async(req,res,next) => {
    const id = req.body.id;
    const firstName = req.body.first_name;
    const lastName = req.body.last_name;
    const email = req.body.email;
    const phone = req.body.phone;

    db.hmset(id, [
        'firstName', firstName,
        'lastName', lastName,
        'email', email,
        'phone', phone
    ], (err, reply) => {
        if (err) {
            console.log(err)
        } else {
            console.log(reply);
            res.redirect('/');
        }
    })
}

const deleteUser = async(req,res,next)=>{
    db.del(req.params.id);
    res.redirect('/');
}

module.exports = {
    search,addUserForm,
    addUser,deleteUser
}