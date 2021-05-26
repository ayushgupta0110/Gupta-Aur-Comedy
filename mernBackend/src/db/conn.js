const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/RegisterationDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
    console.log("Database is successfully connected");
}).catch((err) =>{
    console.log(err);
})
