const { Employee } = require('../models/Employee');


// update employee name by id 
const updateEmployee = async (req, res) => {
  try {

    const employeeId = req.params.employeeId;
    const employee = await Employee.findOne({ _id: employeeId });

    if (req.body.employeeName) {
      employee.employeeName = req.body.employeeName;
    }

    if (req.body.employeeStreet) {
      employee.employeeStreet = req.body.employeeStreet;
    }

    if (req.body.employeeCity) {
      employee.employeeCity = req.body.employeeCity;
    }

    if (req.body.employeeSalary) {
      employee.employeeSalary = req.body.employeeSalary;
    }
    if (req.body.employeeGender) {
      employee.employeeGender = req.body.employeeGender;
    }

    await employee.save();
    res.status(200).send(employee);

  } catch (e) {
    res.status(400).send(e);
  }
};

// delete employee by id
const deleteEmployee = async (req, res) => {
  try {
    const employeeId = req.params.employeeId;
    const employee = await Employee.deleteOne({ _id: employeeId });
    res.status(200).send(employee);

  } catch (e) {
    res.status(400).send(e);
  }
};

// get all employees
const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find({})
    res.status(200).send(employees)
  }
  catch (e) {
    res.status(400).send(e)
  }
};

// get employee by id 
const getEmployeeByID = async (req, res) => {
  try {
    const employeeId = req.params.employeeId
    const employee = await Employee.findById({ _id: employeeId })
    res.status(200).send(employee)
  }
  catch (e) {
    res.status(400).send(e)
  }
}

// add new employee
const addEmployee = (req, res) => {
  //TODO
};

module.exports = {
  getAllEmployees,
  getEmployeeByID,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};
