const {Router} = require('express');
const Member = require('../controllers/members-controller')
const memberRouter = Router()


// members end points
memberRouter.post("/", Member.createMember);
memberRouter.get("/", Member.getAllMembers);
memberRouter.get("/:memberId", Member.getMemberById);
memberRouter.delete("/:memberId", Member.deleteMember);
memberRouter.put("/:memberId", Member.updateMember);


module.exports = {
    memberRouter,
}