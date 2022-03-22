const express = require('express');
const bodyParser = require('body-parser')
const Routes = require('./routes/routes');

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', Routes);

const port = 3000
app.listen(port, ()=> {
    console.log(`Server listening on port ${port}`)
})

