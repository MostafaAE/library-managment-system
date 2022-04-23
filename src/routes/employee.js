const {Router} = require('express');
const Employee = require('../controllers/employees-controller')
const employeeRouter = Router()


// employees end points
employeeRouter.put('/:id',Employee.updateEmployeeName);
employeeRouter.delete('/:id',Employee.deleteEmployee);
employeeRouter.delete('/',Employee.deleteAllEmployees);
employeeRouter.get('/',Employee.getAllEmployees);
employeeRouter.get('/:id',Employee.getEmployeeByID);
employeeRouter.post('/',Employee.addEmployee);



module.exports = {
    employeeRouter,
}