const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');

app.use(cors());

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});

app.get('/',(req,res) => {
    res.send({
        rate:10
    });
    //fs.watchFile('awdawd');
});