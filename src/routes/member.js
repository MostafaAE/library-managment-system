const {Router} = require('express');
const Member = require('../controllers/members-controller')
const memberRouter = Router()


// members end points
memberRouter.put("/:memberId", Member.updateMember);



module.exports = {
    memberRouter,
}