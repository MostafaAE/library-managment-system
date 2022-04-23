const {Schema, model} = require ('mongoose')


const bookSchema = new Schema(
    {
        isbn: {
            type : String,
            required: true,
            maxlength: 15,
            unique: true
        },
        bookName: {
            type: String,
            required: true,
        },
        bookType:{
            type: String,
        },
        authorName:{
            type: [String],

        },
        yearOfPublication:{
            type: Number,
            max: 2022,
            min: 0
        },
        bookAvailability:{
            type: Boolean,
            default: true
        },
        memberId:{
            type: Schema.Types.ObjectId,
            ref: 'Member'
        }
    }
);

const Book = model('book', bookSchema)

module.exports = {
    Book,
};