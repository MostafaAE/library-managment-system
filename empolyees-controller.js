let employeesDB = [
    {
      employeeId: 1,
      employeeName: "Mostafa",
      employeeSSN: "12345678901234",
      employeeDOB: "25-12-1998",
    },
  ];

// get all employees
const getAllemployees=(req,res)=>{
  res.send(employeesDB);
};
  
// get employee by id 
const getEmployeeByID =(req,res)=>{
	  let employee =employeesDB.find((employee)=>employee.employeeId===parseInt(req.params.id));
	  if(!employee) return res.status(404).send('Employee id is not found');
	  res.send(employee);
}

// add new employee
const addEmployee = (req,res)=>{
	const employee ={
	  employeeId: employeesDB.length+1,
	  employeeName: req.body.name,
	  employeeSSN :req.body.ssn,
	  employeeDOB: req.body.dob,
	};
	employeesDB.push(employee);
	res.send(employee);
};

module.exports={
  getAllemployees,
  getEmployeeByID,
  addEmployee,
};