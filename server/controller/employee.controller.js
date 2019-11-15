const mongoose = require('mongoose')
require('../models/employee.model')
const  emp = mongoose.model('Employee') 

module.exports.create = (req, res, next) => {
    emp.create(req.body,(err,data)=>{
      console.log(data);
        if(err){
            if (err.code == 11000) res.status(422).send(['Duplicate email adrress found.'])
            //11000 unique
            else return next(err)
        } else {
            res.json(data)
        }
    })
}
module.exports.getAll = (req, res) => {
    emp.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  }
  module.exports.getBYId = (req, res) => {
    emp.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  }

  module.exports.update = (req, res, next) => {
    emp.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.statusText = 'Your have updated succesfully'
        res.json(data)
        console.log('Data updated successfully')
      }
    })
  }
  module.exports.delete = (req, res, next) => {
    emp.findOneAndRemove(req.params.id, (error, data) => {
      if (error) {
          console.log("no")
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  }