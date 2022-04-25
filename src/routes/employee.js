const { Router } = require('express');
const Employee = require('../controllers/employees-controller')
const employeeRouter = Router()


// employees end points
employeeRouter.patch('/:employeeId', Employee.updateEmployee);
employeeRouter.delete('/:employeeId', Employee.deleteEmployee);

employeeRouter.post('/', Employee.addEmployee);
employeeRouter.get('/', Employee.getAllEmployees);
employeeRouter.get('/:employeeId', Employee.getEmployeeByID);


module.exports = {
    employeeRouter,
}