// practicing live class examples

const anArray = [100, 500];

const [first, second] = anArray;

console.log(first, second);


// with object

const obj = { age: 22, height: 170};

const {age, height} = obj;

console.log(height, age);

const newObj = { ship: "transport", football: "game"};

const {ship, football} = newObj;
const {ship: plane, football: cricket} = newObj;

console.log(plane, cricket);