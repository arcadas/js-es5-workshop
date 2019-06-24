function Contract(id, mode) {
  this.id = id;
  this.mode = mode;
}
Contract.prototype.getMode = function() {
  return this.mode;
};

// 0.
//var contract1 = new Contract(1, 'gfb');
//console.log(contract1);

function ContractTravel(id, dest) {
  // Executing constructor of Contract
  Contract.call(this, id, 'travel');
  this.dest = dest;
}
// 1.
// Set __proto__
//ContractTravel.prototype = Object.create(Contract.prototype);
// 2.
// Set contructor
//ContractTravel.prototype.constructor = ContractTravel;

var contractTravel1 = new ContractTravel(1, 'EU');
console.log(contractTravel1);

// 3.
//console.log(contractTravel1.getMode());
// ContractTravel -> Contract proto -> Object proto -> getMode

// 4.
//ContractTravel.prototype.getDest = function () {
//  return this.dest;
//};
// 4.
//console.log(contractTravel1.getDest());
