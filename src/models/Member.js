const {Schema, model} = require ('mongoose')


const memberSchema = new Schema(
    {
        memberSsn: {
            type : String,
            required: true,
            unique: true
        },
        memberName: {
            type: String,
            required: true,
        },
        memberPhone:{
            type: String,
            maxlength: 15
        },
        memberEmail:{
            type: String,
        },
        memberGender:{
            type: String,
            enum :['male ', 'female'],
        },
        memberStreet:{
            type: String
        },
        memberCity:{
            type: String
        }
    }
);

const Member = model('member', memberSchema)

module.exports = {
    Member,
};