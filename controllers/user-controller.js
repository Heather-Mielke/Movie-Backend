//dependencies

const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()
const Users = require('../models/user.js')
require('dotenv').config()


//index route - show list of all users - will not exist in final app 
router.get('/', (req, res) => {
    Users.find({}, (err, foundUsers) => {
        res.json(foundUsers)
    })
})


//post route (create new user)
router.post('/', (req, res) => {
    Users.create(req.body, (err, newUser) => {
        res.json(newUser)
    })
})

//update route (update profile)
router.put('/:id', (req,res) => {
    Users.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedUser) => {
        res.json(updatedUser)
    })
})

//delete route - delete profile
router.delete('/:id', (req, res) => {
    Users.findByIdAndRemove(req.params.id, (err, deletedUser) => {
        res.json(deletedUser)
    })
})


module.exports = router