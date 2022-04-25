const { Schema, model } = require('mongoose');

const employeeSchema = new Schema(
    {
        employeeSsn: {
            type: String,
            required: true,
            unique: true,
        },
        employeeName: {
            type: String,
            required: true,
        },
        employeeStreet: {
            type: String,
        },
        employeeCity: {
            type: String,
        },
        employeeSalary: {
            type: Number,
        },
        employeeGender: {
            type: String,
        },
        
    }
);

const Employee = model('employee', employeeSchema);

module.exports = {
    Employee,
};