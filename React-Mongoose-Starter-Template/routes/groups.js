const express = require('express')
const router = express.Router()

const Group = require('../models/Group')

router.route('/')
  .get((req, res) => {
    Group.find()
      .then(groups => { res.send(groups) })
      .catch(err => { res.status(400).send(err) })
  })
  .post((req, res) => {
    Group.create(req.body)
      .then(group => { res.send(group) })
      .catch(err => { res.status(400).send(err) })
  })

router.route('/:id')
  .get((req, res) => {
    Group.findById(req.params.id)
      .populate('users')
      .then(group => res.send(group))
      .catch(err => res.status(400).send(err))
  }) 

router.put('/:groupId/addUser/:userId', (req, res) => {
  let { groupId, userId } = req.params;
  Group.findById(groupId)
    .then( group => {
      group.users.push(userId)
      return group.save()
    })
    .then(savedGroup => {
      res.send(savedGroup)
    })
    .catch(err => res.status(400).send(err))
})

module.exports = router

// router.route('/:id')
//   .get((req, res) => {
//     Group.findById(req.params.id)
//       .then(group => res.send(group))
//       .catch(err => res.status(400).send(err))
//   })