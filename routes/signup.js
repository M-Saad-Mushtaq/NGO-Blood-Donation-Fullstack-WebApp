const express = require('express');
const {
    usersDAO,
    staffDAO,
    healthcardDAO,
    patientDAO
  } = require('../dao/ngoDAO')

const router = express.Router();



router.post('/user',(req,res)=>{
    try {
        usersDAO.addUser(req.body);
        res.json({ status: "success" })
      } catch (e) {
        res.status(500).json({ error: e.message })
      }
})

router.post('/staff',async (req,res)=>{
  try {
    await staffDAO.addStaff(req.body);
    res.json({ status: "success" })
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})

router.post('/healthcard',async (req,res)=>{
  try {
    healthcardDAO.addCard(req.body);
    res.json({ status: "success" })
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})

router.post('/patient',(req,res)=>{
    try {
        patientDAO.addPatient(req.body);
        res.json({ status: "success" })
      } catch (e) {
        res.status(500).json({ error: e.message })
      }
})

module.exports = router;