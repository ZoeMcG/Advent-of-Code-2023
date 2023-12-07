let input = `<INPUT>`.split('\n').map(x => x.split(' '));

let cards = ['A','K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4','3','2','1'];

function compareCards(x,y){
  x = x.split('');
  y = y.split('');
  let card1pass = [];
  let duplicates1 = [];
  let card2pass = [];
  let duplicates2 = [];
  for (let i = 0; i < x.length; i++){
    if (card1pass.includes(x[i])){
      if (!duplicates1.includes(x[i])) duplicates1.push(x[i]);
    }
    else card1pass.push(x[i]);
    if (card2pass.includes(y[i])){
      if (!duplicates2.includes(y[i])) duplicates2.push(y[i]);
    }
    else card2pass.push(y[i]);
  }
  if (card1pass.length > card2pass.length) return false;
  if (card2pass.length > card1pass.length) return true;
  if (duplicates1.length > duplicates2.length) return false;
  if (duplicates2.length > duplicates1.length) return true;
  for (let i = 0; i<x.length; i++){
    if (cards.indexOf(x[i]) < cards.indexOf(y[i])) return true;
    if (cards.indexOf(y[i]) < cards.indexOf(x[i])) return false;
  }
}

let sortedList = [];
sortedList.push(input[0]);
sortedList.push(input[1]);
for (let i = 2; i<input.length; i++){
  let row = input[i];
  let low = 0;
  let high = sortedList.length;
  let MP = Math.round((low + high)/2);
  while (high != MP){
    if (compareCards(sortedList[MP][0], row[0])){
      high = MP;
    }
    else low = MP;
    MP = Math.round((low + high)/2);
  }
  let newList = [...sortedList.slice(0,MP),row,...sortedList.slice(MP)];
  sortedList = [...newList];
}

let a = 0;
for (let hand = 0; hand<sortedList.length; hand++){
  a += parseInt(sortedList[hand][1])*(hand+1);
}
console.log(a)