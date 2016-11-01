const mongoose = require('mongoose')
let User;

const userSchema = new mongoose.Schema({
  name: {
    first: {type: String, minlength: 1},
    last: {type: String}
  },
  age: {type: Number, min: 1, max: 120},
  gender: { type: String},
  tags: [{type: String, maxlength: 100}]
})

//with in the statics and methods are great places to make api calls

//statics - model / class method - User.findFemale()
userSchema.statics.findFemale = function() {
  //this is the model
  return this.find({ gender: 'female'})
  //could use instead of the 'this keyword'
  //return User.find({ gender: 'female'}) or
  // //return mongoose.model('User').find({ gender: 'female'})
}
//methods - model / instance method - user.greeting()
userSchema.methods.greeting = function() {
  //this is the document
  //Use this to get it on the document we are calling it on
  console.log(`Hi I'm ${this.name.first}`)
}

userSchema.methods.haveBirthday = function(cb) {
  //increment user's age
  //save to database
  //(return the promise)
  this.age++;
  return this.save(cb)
  // return this.save(cb || () => {})
}

User = mongoose.model('User', userSchema)

module.exports = User