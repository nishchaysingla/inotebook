const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/inotebook"
// const connectToMongo = () =>{
//     mongoose.connect(mongoURI, ()=>{
//         console.log("connected to mongo successsfully");
//     })
// }
// const mongoose = require('mongoose');

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // Add any other options you need
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

module.exports = connectToMongo;

// module.exports= connectToMongo;