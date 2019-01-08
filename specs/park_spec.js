const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let dinosaur1;
  let dinosaur2;
  let park;
  beforeEach(function () {
    dinosaur1 = new Dinosaur('codeclansauro', 'omnivore', 110 )
    dinosaur2 = new Dinosaur('t-rex', 'carnivore', 50)
    park = new Park('Jurassic Park', 15 )
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice
    assert.strictEqual(actual, 15)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinoCollection
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur1)
    const actual = park.countDinosaurs()
    assert.strictEqual(actual, 1)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    
  });

  // it('should be able to find the dinosaur that attracts the most visitors');
  //
  // it('should be able to find all dinosaurs of a particular species');
  //
  // it('should be able to remove all dinosaurs of a particular species');

});
