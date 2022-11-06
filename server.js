const express = require('express')
const app = express();
const bodyparser = require('body-parser');
const { urlencoded } = require('body-parser');
const db = require('./config/db')
const route = require('./routes/routes')
const path = require('path');


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use('/upload/',express.static(path.join(__dirname, '/upload/')));

route(app)



app.listen(3300,()=>{
    console.log('server is running');
})
