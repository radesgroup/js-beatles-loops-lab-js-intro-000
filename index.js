// add solution here


function theBeatlesPlay(musicians, instruments){
const myArray = [];
  for (let n = 0; n < musicians.length; n++){
   myArray.push('${musicians[n]} plays ${instruments[n]}');
}
return myArray
}

function johnLennonFacts(facts) {
  const newFacts = []

  let i = 0
  while (i < facts.length) {
    newFacts.push(`${facts[i]}!!!`)
    i++
  }

  return newFacts
}



var r = 7;
var loveBeatlesEmpty = [];
function iLoveTheBeatles(r){
let dif = 0;
  if (r < 15){
    do {
    loveBeatlesEmpty.push("I love the Beatles!")
    dif++;
       }
    while (dif < (15 - r));
    return loveBeatlesEmpty;
             }
  else if(r >= 15){
    loveBeatlesEmpty = ["I love the Beatles!"];
  }return loveBeatlesEmpty;
}

var r = 17;
var loveBeatlesEmpty = [];
function iLoveTheBeatles(r){
let dif = 0;
  if (r < 15){
    do {
    loveBeatlesEmpty.push("I love the Beatles!")
    dif++;
       }
    while (dif < (15 - r));
    return loveBeatlesEmpty;
             }
  else if(r >= 15){
    loveBeatlesEmpty = ["I love the Beatles!"];
  }return loveBeatlesEmpty;
}
