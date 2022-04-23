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


//get all members
const getAllMembers = async (req, res) =>{
  try{   
      const members = await Member.find({})
      res.status(200).send(members)    
  }
  catch(e){
     res.status(400).send(e)
  }
}


//get member give id in param memberId
const getMemberById = async (req, res) =>{

  try{
      const memberId =  req.params.memberId
      const member = await Member.findById({_id : memberId})
      res.status(200).send(member)
  }
  catch(e){
      res.status(400).send(e)
   }
}



  module.exports = {

    createMember,
    getAllMembers,
    getMemberById

  
  //memebr put by id 
  const updateMember = async (req,res) =>{
    try{
        const memberId =  req.params.memberId
        const member = await Member.findOne({_id : memberId})
  
        if(req.body.memberSsn){
          member.memberSsn = req.body.memberSsn;
        }
        if(req.body.memberName){
          member.memberName = req.body.memberName;
        }
        if(req.body.memberPhone){
          member.memberPhone = req.body.memberPhone;
        }
        if(req.body.memberEmail){
          member.memberEmail = req.body.memberEmail;
        }
        if(req.body.memberGender){
          member.memberGender = req.body.memberGender;
        }
        if(req.body.memberStreet){
          member.memberStreet = req.body.memberStreet;
        }
        if(req.body.memberCity){
          member.memberCity = req.body.memberCity;
        }
  
        await member.save()
        res.status(200).send(member)
    }
    catch(e){
        res.status(400).send(e)
     }
  
  }
  
  // delete book by id
  const deleteMember = async (req,res) =>{
  
    try{
        const memberId =  req.params.memberId
        const member = await Member.deleteOne({_id : memberId})
        res.status(200).send(member)
    }
    catch(e){
        res.status(400).send(e)
     }
  }

  module.exports = {
    updateMember,
    deleteMember
  };