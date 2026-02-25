const dotenv = require('dotenv');

dotenv.config({path : './config.env'});

const dbConfig = require('./Configuration/dbConfig');


let app = require('./app');


const port = process.env.PORT_NUM || 3000;
// to read the env variables

app.listen(port,() => {
    console.log("Server started");
});