const connectToMongo = require('../db');
const Magazine=require('../modals/Magazines')

const magazineJson=require('../magazine.json');


const start=async()=>{
    try {
        await connectToMongo()
     Magazine.create(magazineJson)

     console.log("success")
    } catch (error) {
        console.log("error")
    }
    
}
start()
