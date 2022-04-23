const {Router} = require('express');
const Member = require('../controllers/members-controller')
const memberRouter = Router()


// members end points
memberRouter.get("/", Member.getAllMembers);
memberRouter.get("/:memberId", Member.getMemberbyId);
memberRouter.delete("/:memberId", Member.deleteMember);
memberRouter.post("/", Member.addMember);
memberRouter.put("/:memberId", Member.updateMember);



module.exports = {
    memberRouter,
}