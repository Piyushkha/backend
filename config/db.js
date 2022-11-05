const mongoose = require('mongoose')
const dbUser ="piyushkhatridb"
const dbPassword="piyush123"
const hostName="cluster0.adzul6t.mongodb.net"
const dbName="blogdb"
const localDB = `mongodb+srv://${dbUser}:${dbPassword}@${hostName}/${dbName}?retryWrites=true&w=majority`;
// mongoose.connect(process.env.MONGODB_URI || localDB,
mongoose.connect(localDB,


    { useNewUrlParser: true, useUnifiedTopology: true }
    ).then(() => {
    console.log(`DB connection successfull`);
}).catch((error) => {
    console.log(error);
});
mongoose.Promise = global.Promise;


