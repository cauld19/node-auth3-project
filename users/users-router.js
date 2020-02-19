const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');
const checkDepartment = require('../auth/check-department-middleware.js');

router.get('/', restricted, checkDepartment('herm'), (req,res) => {
    
    Users.find()
        .then(users => {
            res.status(200).json(users)
        })
        .catch( err => {
            res.status(500).json(err)
        })
})


module.exports = router;