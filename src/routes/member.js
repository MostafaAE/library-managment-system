const {Router} = require('express');
const Member = require('../controllers/members-controller')
const memberRouter = Router()


// members end points
memberRouter.delete("/:memberId", Member.deleteMember);
memberRouter.put("/:memberId", Member.updateMember);



module.exports = {
    memberRouter,
}