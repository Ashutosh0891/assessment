const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const mongoURI = "mongodb://localhost:27017/Practice";

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("connected to mongo successfully");
    })
}
module.exports = connectToMongo;

