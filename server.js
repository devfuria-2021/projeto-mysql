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
app.get('/my-route?', (req, res) => {

    // doSomething((result) => {
    //     // console.log(result);
    //     res.status(200).json(result);
    // });

    const param = req.query.param;

    doSomething(config, param, (result) => {
        // console.log(result);

        // const resultModify = result.map((row) => {
        //     // console.log(row.User);
        //     return { "user": row.User, "pwdLastChange": row.password_last_changed };
        // }) 
        // console.log(resultModify);
        // res.status(200).json(resultModify);

        res.status(200).json(result);
    });

})

app.listen(port, () => {
    console.log(`server running ${port}`)
})