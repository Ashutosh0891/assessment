const connectToMongo = require('../db');
const Magazine=require('../modals/Books')

const booksJson=require('../books.json');


const start=async()=>{
    try {
        await connectToMongo()
     Magazine.create(booksJson)

     console.log("success")
    } catch (error) {
        console.log("error")
    }
    
}
start()
