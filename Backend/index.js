/* const express = require("express");
// const productRoutes = require('./Route/productRoutes');
const studentRoutes=require('./Route/studentRoutes')

const app = express();
const port = 5050;

app.use(express.json());
app.use('/api', studentRoutes)

// app.use('/api', productRoutes);

app.listen(port, () => {
    console.log("Server is running on port", port);
});
 */

const express=require('express');
const studentRoutes=require('./Route/studentRoute')

const app=express();
const port =5000;
app.use(express.json());

app.use('/api', studentRoutes);
app.listen(port,()=>{
    console.log('Server is running')
});