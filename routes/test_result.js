const express = require('express');

const {
    patientDAO
  } = require('../dao/ngoDAO')

const router = express.Router();

router.get('/',async (req,res)=>{
    try {
        let result =  await patientDAO.getResult(req.query.id);
        if (!result) {
          res.status(404).json({ error: "Not found" })
          return
        }
        res.json(result)
      } catch (e) {
        console.log(`api, ${e}`)
        res.status(500).json({ error: e })
      }
})

module.exports = router;