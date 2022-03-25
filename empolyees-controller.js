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

//delete employee by id 
const deleteEmplyee=(req,res)=>{
  const id =parseInt(req.params.id);
  const employee = employeesDB.find(
    e => e.employeeId === id
  );
  if(!employee){
    return res.send('Error not found');
  }
  const index =employeesDB.indexOf(employee);
  employeesDB.splice(index,1);

  res.send(employee);
}

//delete All employee  
const deleteAllEmplyee=(req,res)=>{

  if(employeesDB.length === 0){
    return res.send('Error not found');
  }

  const temp =employeesDB;
  employeesDB =[];

  res.send(temp);
}

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
  updateEmployeeName,
  deleteEmplyee,
  deleteAllEmplyee,
};
