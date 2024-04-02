let express = require('express');
let app = express();
let dotenv = require ('dotenv');
dotenv.config()
let port = process.env.PORT || 6700;
app.get('/',(req,res)=>{
res.send("<h1>THIS IS SIMPLE NODE JS APP</h1>")
})
app.listen (port,(err)=>{
    if(err) throw err;
    else {
    console.log(`server is runing on port ${port}`)
    }
});