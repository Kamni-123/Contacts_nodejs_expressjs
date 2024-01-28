const express= require("express");
const errorhandler = require("./middleware/errorhandler");
const connectiondB = require("./config/dBconnection");
const dotenv = require("dotenv").config();
const app= express();
connectiondB();

const port = process.env.PORT || 5000;
app.get("./api/contacts",(req,res)=>{
    res.status(200).json({message:"get all contacts"});
});
app.use(express.json());
app.use("/api/contacts", require("./routes/contacts-routes"))
app.use(errorhandler);
app.listen(port, () => {
    console.log(`server is runing on ${port}`);
});


