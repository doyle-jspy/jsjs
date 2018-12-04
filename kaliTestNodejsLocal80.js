const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('KALI')
})

app.listen(80,()=>{
    console.log('80 port')
})