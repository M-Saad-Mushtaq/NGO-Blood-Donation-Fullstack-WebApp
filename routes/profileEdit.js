const express = require('express');

const {
    usersDAO
  } = require('../dao/ngoDAO')

const router = express.Router();

router.get('/',async (req,res)=>{
    try {
        let id = req.query.id;
        let user =  await usersDAO.getUserbyId(parseInt(id));
        if (!user) {
          res.status(404).json({ error: "Not found" })
          return
        }
        res.json({found:true,user})
      } catch (e) {
        console.log(`api, ${e}`)
        res.status(500).json({ error: e })
      }
})

router.put('/',async (req,res)=>{
    try {
        const id = req.query.id;
        
        const updateResponse = await usersDAO.updateUser(id, req.body);
  
        var { error } = updateResponse
        if (error) {
          res.status(400).json({ error })
        }
  
        if (updateResponse.modifiedCount === 0) {
          throw new Error(
            "unable to update user info",
          )
        }
  
        res.json({ status: "success" })
      } catch (e) {
        res.status(500).json({ error: e.message })
      }
})


module.exports = router;