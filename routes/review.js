const express = require('express');
const { staffReviewDAO, centerReviewDAO } = require('../dao/ngoDAO');

const router = express.Router();

router.get('/center',async (req,res)=>{
    try {
        let centerReview =  await centerReviewDAO.getReviews();
        if (!centerReview) {
          res.status(404).json({ error: "Not found" })
          return
        }
        res.json(centerReview)
      } catch (e) {
        console.log(`api, ${e}`)
        res.status(500).json({ error: e })
      }
})

router.post('/center',(req,res)=>{
    try {
        centerReviewDAO.addReview(req.body);
        res.json({ status: "success" })
      } catch (e) {
        res.status(500).json({ error: e.message })
      }
})

router.get('/staff',async (req,res)=>{
    try {
        let staffReview =  await staffReviewDAO.getReviews();
        if (!staffReview) {
          res.status(404).json({ error: "Not found" })
          return
        }
        res.json(staffReview)
      } catch (e) {
        console.log(`api, ${e}`)
        res.status(500).json({ error: e })
      }
})

router.post('/staff',(req,res)=>{
    try {
        staffReviewDAO.addReview(req.body);
        res.json({ status: "success" })
      } catch (e) {
        res.status(500).json({ error: e.message })
      }
})

module.exports = router;