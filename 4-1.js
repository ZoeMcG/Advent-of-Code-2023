let input = `<INPUT>`.split('\n').map(x => x.split('|').map(x => x.split(' ')));

let a = 0;
for (let row of input){
  let count = 0;
  for (let i of row[0]) if (row[1].includes(i) && i == parseInt(i)) count++;
  if (count >= 1) a += (2 ** (count-1));
};

console.log(a);