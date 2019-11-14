const mongoose = require('mongoose')
require('../models/employee.model')
const  emp = mongoose.model('Employee') 

module.exports.create = (req, res, next) => {
    emp.create(req.body,(err,data)=>{
        if(err){
            if (err.code == 11000) res.status(422).send(['Duplicate email adrress found.'])
            //11000 unique
            else return next(err)
        } else {
            res.json(data)
        }
    })
}