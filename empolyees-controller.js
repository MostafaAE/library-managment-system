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
const updateEmployeeName = (req, res) => {
  const id = parseInt(req.params.id);
  const employee = employeesDB.find(
    e => e.employeeId === id
  );
  if (!employee) {
    res.status(404).send({ error: "NOTFOUND" });
  } else {
    employee.employeeName = req.body.name;
    res.send(employee);
  }
};


module.exports = {
  updateEmployeeName,
};

