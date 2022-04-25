const { Employee } = require('../models/Employee');

let employeesDB = [
  {
    employeeId: 1,
    employeeName: "Mostafa",
    employeeSSN: "12345678901234",
    employeeDOB: "25-12-1998",
  },
  {
    employeeId: 2,
    employeeName: "Amin",
    employeeSSN: "67890123412251",
    employeeDOB: "18-5-1999",
  },
];


// update employee name by id 
const updateEmployee = async (req, res) => {
  try {

    const employeeId = req.params.employeeId;
    const employee = await Employee.findOne({_id: employeeId });

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
    const employee = await Employee.deleteOne({_id : employeeId});
    res.status(200).send(employee);

  } catch (e) {
    res.status(400).send(e);
  }
};

// get all employees
const getAllEmployees = (req, res) => {
  res.send(employeesDB);
};

// get employee by id 
const getEmployeeByID = (req, res) => {
  let employee = employeesDB.find((employee) => employee.employeeId === parseInt(req.params.id));
  if (!employee) return res.status(404).send('Employee id is not found');
  res.send(employee);
}

// add new employee
const addEmployee = (req, res) => {
  const employee = {
    employeeId: employeesDB.length + 1,
    employeeName: req.body.employeeName,
    employeeSSN: req.body.employeeSSN,
    employeeDOB: req.body.employeeDOB,
  };
  employeesDB.push(employee);
  res.send(employee);
};

module.exports = {
  getAllEmployees,
  getEmployeeByID,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};
