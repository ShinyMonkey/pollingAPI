const express=require('express');
const port=8000;
const app=express();
const mongoose=require('mongoose');
const db=require('./config/mongoose')

app.use(express.urlencoded());

app.use('/',require('./routs'))

app.listen(port,function(err){
    if(err){
        return console.log('Error Wile starting the server')
    }
    console.log('Server is running in port:',port);
})