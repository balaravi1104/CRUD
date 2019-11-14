const express = require('express');
const app = express();
const empRoute = express.Router();

// Employee model
//const Employee = require('../models/employee.model');
const ctrl = require('../controller/employee.controller')

// Add Employee
    empRoute.post('/create',ctrl.create)
// employeeRoute.route('/create').post((req, res, next) => {
//   Employee.create(req.body, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// });

// (req,res,next) =>{
//     Employee.create(req.body,(err,data)=>{
//         if(err){
//             return next(err)
//         } else {
//             res.json(data)
//         }
//     })
// }

module.exports = empRoute;