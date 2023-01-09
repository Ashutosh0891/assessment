const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const mongoURI = "mongodb+srv://ashutosh:Ashu%400891@cluster0.xtfkrqs.mongodb.net/Practice";

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("connected to mongo successfully");
    })
}
module.exports = connectToMongo;

