const express = require('express');
const cors = require('cors');
const config = require('./config');

// const doSomething = require("./fase02");
const doSomething = require("./api");

const app = express();
const port = 3000;

app.use(cors());

//
// http://localhost:3000/my-route?foo=1234
//
app.get('/my-route', (req, res) => {

    // doSomething((result) => {
    //     // console.log(result);
    //     res.status(200).json(result);
    // });

    doSomething(config, (result) => {
        // console.log(result);
        res.status(200).json(result);
    });

})

app.listen(port, () => {
    console.log(`server running ${port}`)
})