const Service = require('../services//bitrix.service');
const bitrixController = async (req, res) => {
   try {
       let data = {};
       const {
        id,
        email,
        phone,
        name,
        country
        // comments,
        // course,
    } = req.body;
       data = await Service.getList(email);
       /**
        * If no data exist then
        */
       if ( !data || !data.data.result || data.data.result.length === 0) {
            data = await Service.createBitrix(req.body);   
       } else {
            req.body.id = data.data.result[0].ID;
            data = await Service.updateBitrix(req.body);
       }
       return res.status(200).send(data.data);
   } catch(e) {
       return res.status(500).send(e);
   }
};

module.exports = {
    bitrixController,
}