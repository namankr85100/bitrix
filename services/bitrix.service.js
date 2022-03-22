const FormData = require('form-data');
const axios = require('axios');


const TOKEN = 'c29vcmFqc2FpcmFtQGFjZW1hZ2ljay5jb206OVNhaXJhbWF5YSo=';

const getList = (email) => {
    const data = JSON.stringify({
        "order": {
          "STATUS_ID": "ASC"
        },
        "filter": {
          "EMAIL": email
        },
        "select": [
          "TITLE"
        ]
      });
      
    const config = {
        method: 'POST',
        url: 'https://nwkings.bitrix24.com/rest/1/dfpb37fy2t5jsayc/crm.lead.list.json',
        headers: { 
        'Authorization': `Basic ${TOKEN}`, 
        'Cookie': 'BITRIX_SM_SALE_UID=6; qmb=.', 
        'Content-Type': 'application/json', 
        },
        data : data
    };

   return  axios(config);

}

const createBitrix = (body) => {   
  const url = 'https://nwkings.bitrix24.com/rest/1/dfpb37fy2t5jsayc/crm.lead.add.json';  
  const data = new FormData();
  data.append('fields[NAME]', body.name);
  data.append('fields[EMAIL][0][VALUE]', body.email);
  data.append('fields[PHONE][0][VALUE]', body.phone);
  data.append('fields[TITLE]', body.name);
  data.append('fields[ADDRESS_COUNTRY]', body.country);
  // data.append('fields[POST]', 'CTO');
  // data.append('fields[PHONE][0][VALUE_TYPE]', 'WORK');
  // data.append('fields[EMAIL][0][VALUE_TYPE]', 'WORK');
  // data.append('fields[UF_CRM_LEAD_1644310473870]', 'Physics');
  // data.append('fields[UF_CRM_1645174167]', 'IND');

  const config = {
  method: 'post',
  url: url,
  headers: { 
  'Authorization': 'Basic c29vcmFqc2FpcmFtQGFjZW1hZ2ljay5jb206OVNhaXJhbWF5YSo=', 
  'Cookie': 'BITRIX_SM_SALE_UID=6; qmb=.', 
  ...data.getHeaders()
  },
  data : data
  };

  return axios(config);
  
}

const updateBitrix = async (body) => {
  const url = `https://nwkings.bitrix24.com/rest/1/dfpb37fy2t5jsayc/crm.lead.update.json?ID=${body.id}`;
  const data = new FormData();
  data.append('fields[NAME]', body.name);
  data.append('fields[EMAIL][0][VALUE]', body.email);
  data.append('fields[PHONE][0][VALUE]', body.phone);
  data.append('fields[TITLE]', body.name);
  data.append('fields[ADDRESS_COUNTRY]', body.country);
  // data.append('fields[POST]', 'CTO');
  // data.append('fields[PHONE][0][VALUE_TYPE]', 'WORK');
  // data.append('fields[EMAIL][0][VALUE_TYPE]', 'WORK');
  // data.append('fields[UF_CRM_LEAD_1644310473870]', 'Physics');
  // data.append('fields[UF_CRM_1645174167]', 'IND');

  const config = {
  method: 'post',
  url: url,
  headers: { 
  'Authorization': 'Basic c29vcmFqc2FpcmFtQGFjZW1hZ2ljay5jb206OVNhaXJhbWF5YSo=', 
  'Cookie': 'BITRIX_SM_SALE_UID=6; qmb=.', 
  ...data.getHeaders()
  },
  data : data
  };

  return axios(config);
}

module.exports = {
  getList,
  createBitrix,
  updateBitrix
}