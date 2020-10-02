// add solution here


function theBeatlesPlay(musicians, instruments){
const myArray = [];
  for (let n = 0; n < musicians.length; n++){
   myArray.push(`${musicians[n]} plays ${instruments[n]}`);
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

function iLoveTheBeatles(n) {
  const arr = []

  do {
    arr.push('I love the Beatles!')
    n++
  } while (n < 15)

  return arr
}
