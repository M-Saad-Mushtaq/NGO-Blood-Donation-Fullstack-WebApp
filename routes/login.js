const express = require('express');

const {
    usersDAO,
    staffDAO,
    adminDAO
  } = require('../dao/ngoDAO')

const router = express.Router();


router.get('/user',async (req,res)=>{
    try {
        let id = req.query.id;
        let pass = req.query.password;
        let user =  await usersDAO.getUser(parseInt(id), pass);
        if (!user) {
          res.status(404).json({ error: "Not found" })
          return
        }
        res.json({found:true,id})
      } catch (e) {
        console.log(`api, ${e}`)
        res.status(500).json({ error: e })
      }
})

router.get('/admin',async (req,res)=>{
    try {
        let id = req.query.id;
        let pass = req.query.password;
        let admin =  await adminDAO.getAdmin(id, pass);
        if (!admin) {
          res.status(404).json({ error: "Not found" })
          return
        }
        res.json({found:true,id})
      } catch (e) {
        console.log(`api, ${e}`)
        res.status(500).json({ error: e })
      }
})

router.get('/staff',async (req,res)=>{
    try {
        let id = req.query.id;
        let pass = req.query.password;
        let staff =  await staffDAO.getStaff(parseInt(id), pass);
        if (!staff) {
          res.status(404).json({ error: "Not found" })
          return
        }
        res.json({found:true,id})
      } catch (e) {
        console.log(`api, ${e}`)
        res.status(500).json({ error: e })
      }console.log("Staff page");
    console.log(req.query.id);
    console.log(req.query.password);
    res.end();
})

module.exports = router;