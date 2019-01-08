const Park = function(name, ticketPrice){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinoCollection = [];
};

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinoCollection.push(dinosaur);

};

Park.prototype.countDinosaurs = function () {
  return this.dinoCollection.length;

};

Park.prototype.


module.exports = Park;
