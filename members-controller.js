let membesrDB = [
    {
      memberId: 1,
      memberName: "Mostafa",
      memberPhone: "01065000000",
      employeeAge: "23",
    },
  ];


  // add member to members list
  const addMember = (req,res)=>{
   const member ={
    memberId: memberDB.length+1,
    memberName:req.body.memberName,
    memberPhone:req.body.memberPhone,
    employeeAge:req.body.employeeAge,
  };
  memberDB.push(member);
  res.send(member);
};


module.exports={
  addMember,
};