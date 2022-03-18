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

 module.exports = {
  getAllMembers,
  getMemberbyId,
};