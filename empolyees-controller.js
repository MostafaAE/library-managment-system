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
  

module.exports={
  getAllemployees,
};