const {app} = require ('./app');
const mongoose = require ('mongoose');
const PORT=3000
const USERNAME='libraryms'
const PASSWORD='cCd5KeFM3BiiwWtT'

const databaseUrl = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.oqu12.mongodb.net/library_management_system?retryWrites=true&w=majority`


app.listen(process.env.PORT || PORT, 
    async ()=>{
    await mongoose.connect(databaseUrl)
    
    console.log(`Server is listening on port ${PORT}....`)
})
