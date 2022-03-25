let membesrDB = [
    {
      memberId: 1,
      memberName: "Mostafa",
      memberPhone: "01065000000",
      employeeAge: "23",
    },
  ];

 
  // get all members
  const getAllMembers = (req, res) => {
    res.send(memberDB);
 };


 // get member by using id 
 const getMemberbyId = (req, res) => {
   let member = memberDB.find(mem => mem.memberId === parseInt(req.params.memberId));
   if (!member) return res.status(404).send("the member with the given id not found");
   res.send(member);
 };

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



  // update member by id
  const updateMember = (req,res)=>{

    let member =memberDB.find(mem => mem.memberId === parseInt(req.params.memberId));
    if(!member) return res.status(404).send('The member with the given id not found');
    member.memberName =req.body.memberName;
    member.memberPhone=req.body.memberPhone;
    member.employeeAge=req.body.employeeAge;
    res.send(member);

  };


 // delete member using id 
  const deleteMember = (req, res) => {
    let member = memberDB.find(mem => mem.memberId === parseInt(req.params.memberId));
    if (!member) return res.status(404).send("the member with the given id not found");

    const index = memberDB.indexOf(member);
    memberDB.splice(index,1); 
    res.send(member);
  };


  module.exports = {
    getAllMembers,
    getMemberbyId,
    addMember,
    updateMember
    deleteMember,
  };