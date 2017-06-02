function logName (name) {
  console.log("Hello, my name is: ", name);
}

module.exports = {
  name: 'Manuel',
  exercise: function(){
    logName(this.name);
  }
};
