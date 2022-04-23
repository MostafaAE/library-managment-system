const {Member} = require ('../models/Member');

let memberDB = [
    {
      memberId: 1,
      memberName: "Mostafa",
      memberPhone: "01065000000",
      employeeAge: "23",
    },
  ];

 

// add new member to database 
const createMember = async (req, res) =>{
  try{
      const member = new Member(req.body)
      await member.save()
      res.status(200).send(member)
  }
  catch(e){
     res.status(400).send(e)
  }
}



  module.exports = {

    createMember
  };