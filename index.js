// add solution here
var myArray =[];
var musicians = [
  "John Lennon",
  "Paul McCartney",
  "George Harrison",
  "Ringo Starr"];
var instruments = [
  "Guitar",
  "Bass Guitar",
  "Lead Guitar",
  "Drums"];
function theBeatlesPlay(musicians, instruments){

  for (let n = 0; n < musicians.length; n++){
   myArray.push(musicians[n] + ' plays ' + instruments[n]);
}
return myArray;
}
var newFacts = [];
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice",
  "While on tour, he enjoyed playing Monopoly",
  "Harmonica was the first instrument Lennon learned to play"
];
function johnLennonFacts(facts){
  let i = 0;
  while (i < facts.length){
    newFacts.push(facts[i] + "!!!")
    i++;
  }
  return newFacts;
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
    loveBeatlesEmpty = ["I love the B!"];
  }return loveBeatlesEmpty;
}
