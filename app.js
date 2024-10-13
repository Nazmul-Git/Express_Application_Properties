//app.js

const express = require('express');
const handler= require('./handler');

const app = express(); // main app
const admin=express(); // sub app     for mountPath 
const PORT = 5000;

app.locals.title= 'Application properties of Express js (app.locals).'

app.get('/', handler);

admin.get('/dashboard', (req, res)=>{
    console.log(admin.mountpath); // /admin
    res.send('Welcome to Admin Dashboard.');
})

app.use('/admin', admin);

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running,and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);
