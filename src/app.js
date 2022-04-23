const express = require('express');
const app = express()
app.use(express.json())

// book router
const {bookRouter} = require('./routes/book')
app.use("/books/", bookRouter)

// member router
const {memberRouter} = require('./routes/member')
app.use("/members/", memberRouter)

// employee router
const {employeeRouter} = require('./routes/employee')
app.use("/employees/", employeeRouter)



// for debugging
// app.use((req, res, next) => {
//     console.log(req.path)
//     next()
// })



module.exports = {app};