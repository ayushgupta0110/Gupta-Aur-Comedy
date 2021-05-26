const express = require('express');
const app = express();
const path = require('path');
require('./src/db/conn');
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname,"../public");

app.use(express.static(static_path));
app.set('view engine',"hbs");

app.get("/",(req,res) => {
    res.send("Hello");
})


app.listen(port,()=> {
    console.log(`server is running at port ${port}`);
});