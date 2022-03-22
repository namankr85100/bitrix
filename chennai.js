const express = require('express');
var axios = require('axios');
var FormData = require('form-data');
var bodyParser = require('body-parser');

const app = express();
app.use(express.static(__dirname));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));



const PORT = 5555;
app.listen(PORT, () => {  
  console.log(`Server running on port ${PORT}`);
});

// TODO :
// Figure our how to render index.html in such a way that 
// index.css can still exist as a separate file and served when 
// browser requests it.
// DONE :
// Embdeded index.css content within the style tag of index.html.
// This is in a way advantageous and recommended since browser need
// not call the Google Cloud Function (serverless in GCP) twice. 
// Each call is charged in Serverless architecture. 
app.get('/', (req, res) => {
  res.statusCode = 302;
  res.redirect(__dirname + '/index.html');
});

//This endpoint is required for the MarketPlace App from Bitrix.
app.post('/', (req, res) => {
  res.statusCode = 200;
  // console.log(__dirname);
  // console.log(req);
  res.sendFile(__dirname + '/index.html');
});

app.post('/submit', (req, res) => {
    res.statusCode = 200;
    console.log(__dirname);
    console.log(req);
    console.log("Now Printing the request.body :");
    console.log(req.body);

    // var query = require('url').parse(req.url,true).query;
    // console.log(query);

    var data = req.body;

    // var data = new FormData();
    // data.append('fields[NAME]', req.body.name);
    // data.append('fields[TITLE]', req.body.name);
    // data.append('fields[PHONE][0][VALUE]', req.body.phone);
    // data.append('fields[PHONE][0][VALUE_TYPE]', 'WORK');
    // data.append('fields[EMAIL][0][VALUE]', req.body.email);
    // data.append('fields[EMAIL][0][VALUE_TYPE]', 'WORK');
    // data.append('fields[COMMENTS]', req.body.comments);
    // data.append('fields[UF_CRM_LEAD_1644310473870]', req.body.course);
    // data.append('fields[UF_CRM_1645174167]', req.body.country);

    // // NWkings
    // var config = {
    //   method: 'post',
    //   url: 'https://nwkings.bitrix24.com/rest/1/dfpb37fy2t5jsayc/crm.lead.add.json',
    //   headers: { 
    //     'Authorization': 'Basic c29vcmFqc2FpcmFtQGFjZW1hZ2ljay5jb206OVNhaXJhbWF5YSo=', 
    //     'Cookie': 'BITRIX_SM_SALE_UID=6; qmb=.', 
    //     ...data.getHeaders()
    //   },
    //   data : data
    // };

    // // // Acemagick
    // // var config = {
    // //   method: 'post',
    // //   url: 'https://acemagick.bitrix24.com/rest/5/e2t6ibxgj0gf9itu/crm.lead.add.json',
    // //   headers: { 
    // //     'Authorization': 'Basic c29vcmFqc2FpcmFtQGFjZW1hZ2ljay5jb206OVNhaXJhbWF5YSo=', 
    // //     'Cookie': 'BITRIX_SM_SALE_UID=5; qmb=.', 
    // //     ...data.getHeaders()
    // //   },
    // //   data : data
    // // };

    // axios(config)
    // .then(function (response) {
    //   console.log(JSON.stringify(response.data));
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

}); 

module.exports = {
  app
};




