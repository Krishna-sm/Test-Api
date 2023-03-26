const express = require('express')
const app = express();
const home = require('./routes/home');
const port= process.env.PORT || 8080;
const dotenv = require('dotenv');
const cors = require('cors');
const morgan= require('morgan');

dotenv.config();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/api/v1',home);

app.get('/',(req,res)=>{
    res.send('api response get');
})


app.listen(port,()=>{
    console.log(`server is running with http:://localhost:${process.env.PORT}`);
})