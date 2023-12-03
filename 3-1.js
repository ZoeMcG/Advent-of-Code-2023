let input = `<INPUT>`.split('\n').map(x => x.split(''));

let numMap = {}

class Number {
  constructor(val, coords) {
    this.valid = false;
    this.val = val;
    for (let coord of coords) {
      numMap[coord[0].toString()+';'+coord[1].toString()] = this;
    }
  }
}

let charCoords = [];
let nums = []
for (let y = 0; y < input.length; y++) {
  let numVal = '';
  let numValCoords = [];
  for (let x = 0; x < input[y].length; x++){
    if (input[y][x] == parseInt(input[y][x])){
      numVal += input[y][x];
      numValCoords.push([x,y]);
      
    }
    else {
      nums.push(new Number(parseInt(numVal),numValCoords));
      numVal = '';
      numValCoords = [];
      if (input[y][x] != '.') charCoords.push([x,y]);
    }
  }
  if (numVal != ''){
    nums.push(new Number(parseInt(numVal),numValCoords));
  }
}

for (let coord of charCoords){
  console.log(coord);
  let x = coord[0];
  let y = coord[1];
  if (numMap[x.toString()+';'+(y+1).toString()]) numMap[x.toString()+';'+(y+1).toString()].valid = true;
  if (numMap[(x+1).toString()+';'+y.toString()]) numMap[(x+1).toString()+';'+(y).toString()].valid = true;
  if (numMap[(x+1).toString()+';'+(y+1).toString()]) numMap[(x+1).toString()+';'+(y+1).toString()].valid = true;
  if (numMap[(x+1).toString()+';'+(y-1).toString()]) numMap[(x+1).toString()+';'+(y-1).toString()].valid = true;
  if (numMap[x.toString()+';'+(y-1).toString()]) numMap[x.toString()+';'+(y-1).toString()].valid = true;
  if (numMap[(x-1).toString()+';'+y.toString()]) numMap[(x-1).toString()+';'+(y).toString()].valid = true;
  if (numMap[(x-1).toString()+';'+(y-1).toString()]) numMap[(x-1).toString()+';'+(y-1).toString()].valid = true;
  if (numMap[(x-1).toString()+';'+(y+1).toString()]) numMap[(x-1).toString()+';'+(y+1).toString()].valid = true;
}

let a = 0;
for (let num of nums){
  if (num.valid){
    a+= num.val;
    console.log(num.val);
  }
}

console.log(a);