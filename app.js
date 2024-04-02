let express = require('express');
let app = express();
let PORT = process.env.PORT || 3000;
app.get('/',(req,res)=>{
res.send("<h1>THIS IS SIMPLE NODE JS APP</h1>")
})
app.listen (port,(err)=>{
    if(err) throw err;
    else {
    console.log(`server is runing on port ${port}`)
    }
});