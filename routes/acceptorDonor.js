const express = require('express');

const {
    acceptorDonorDAO
  } = require('../dao/ngoDAO')

const router = express.Router();


router.get('/',async (req,res)=>{
    try {
        let data =  await acceptorDonorDAO.getData(req.query.city,req.query.bloodtype,req.query.patientType);
        if (!data) {
          res.status(404).json({ error: "Not found" })
          return
        }
        res.json(data)
      } catch (e) {
        console.log(`api, ${e}`)
        res.status(500).json({ error: e })
      }
})

router.post('/', async (req, res) => {
   
    try {
        req.body.id = parseInt(req.body.id);
        acceptorDonorDAO.setAppoint(req.body);
        res.json({ status: "success" })
        } catch (e) {
        res.status(500).json({ error: e.message })
        }
})

router.get('/appointment',async (req,res)=>{
    try {
        let data =  await acceptorDonorDAO.getAppointment(parseInt(req.query.id));
        if (!data) {
          res.status(404).json({ error: "Not found" })
          return
        }
        res.json(data)
      } catch (e) {
        console.log(`api, ${e}`)
        res.status(500).json({ error: e })
      }
})

module.exports = router;