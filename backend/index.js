const express = require("express");
const {config} = require("dotenv");
config();
const PORT = process.env.PORT || 8080
const app = express();
app.get( "/",(req, res) => {
    res.send("This is home route");
})
app.listen(PORT, () => {
    console.log(`Server is runing at http://localhost:${PORT}`);
})