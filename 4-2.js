let input = `<INPUT>`.split('\n').map(x => x.split('|').map(x => x.split(' ')));

let a = 0;

let copies = [];

for (let i = 0; i<input.length; i++) copies.push(1);

for (let k in input){
  let row = input[k];
  let count = 0;
  let copiesOfK = copies[k];
  for (let i of row[0]){
    if (row[1].includes(i) && i == parseInt(i)) count++;
  }
  for (let i = 1; i<=count; i++){
    k = parseInt(k);
    if (copies[k+i] != undefined) copies[k+i] += copiesOfK;
  }
  console.log(copies);
};

for (let number of copies) a+= number;
console.log(a);