const {Member} = require ('../models/Member');

let memberDB = [
    {
      memberId: 1,
      memberName: "Mostafa",
      memberPhone: "01065000000",
      employeeAge: "23",
    },
  ];
 
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
  

  module.exports = {
    updateMember
  };