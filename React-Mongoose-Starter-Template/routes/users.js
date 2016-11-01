const express = require('express')
const router = express.Router()

const User = require('../models/User')

router.route('/')
  .get((req, res) => {
    User.findFemale()
      .skip(10)
      .limit(10)
      .then(users => { res.send(users) })
      .catch(err => { res.status(400).send(err) })
  })
  .post((req, res) => {
    User.create(req.body)
      .then(user => { res.send(user) })
      .catch(err => { res.status(400).send(err) })
  })

  router.route('/:id')
    .put((req, res) => {
      User.findById(req.params.id)
      .then(user => {
        user.haveBirthday((err, savedUser) => {

        })
      })
      .then(user => {
        res.send(user)
      })
      .catch(err => {
        res.status(400).send(err)
      })
    })

// router.route('/:id')
// .put((req, res) => {
//   User.findById(req.params.id)
//   .then(user => user.haveBirthday())
//   .then(user => {
//     res.send(user)
//   })
//   .catch(err => {
//     res.status(400).send(err)
//   })
// })

module.exports = router

// .limit(20)
// .sort({age: 1})
// .sort({age: -1}) - oldest
// .sort({age: -1})
// .limit(3) - top three oldest
// .sort('name.last') by last name
// .sort('-name.last') by decending last name
// .select('age gender') // will limit what fields are returned
// .select('-age')
// .select({
//   age: 1,
//   gender: 1
// })
// .select({
//   age: 1,
//   'name.first': true
// })
