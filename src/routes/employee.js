const { Router } = require('express');
const Employee = require('../controllers/employees-controller')
const employeeRouter = Router()


// employees end points
employeeRouter.patch('/:employeeId', Employee.updateEmployee);
employeeRouter.delete('/:employeeId', Employee.deleteEmployee);

employeeRouter.get('/', Employee.getAllEmployees);
employeeRouter.get('/:id', Employee.getEmployeeByID);
employeeRouter.post('/', Employee.addEmployee);



module.exports = {
    employeeRouter,
}