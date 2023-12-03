let input = `<INPUT>`.split('\n').map(x => x.split(''));

let numMap = {}
let ids = 0;
class Number {
  constructor(val, coords) {
    this.valid = false;
    this.val = val;
    this.id = ids;
    ids++;
    for (let coord of coords) {
      numMap[coord[0].toString()+';'+coord[1].toString()] = this;
    }
  }
}

let charCoords = [];
let nums = []
let a = 0;

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
  let adjCount = 0;
  let vals = [];
  let multi = 1;
  let x = coord[0];
  let y = coord[1];
  if (numMap[x.toString()+';'+(y+1).toString()]){ 
    numMap[x.toString()+';'+(y+1).toString()].valid = true;
    adjCount++;
    vals.push(numMap[x.toString()+';'+(y+1).toString()].id);
  }
  if (numMap[(x+1).toString()+';'+y.toString()]){ 
    numMap[(x+1).toString()+';'+(y).toString()].valid = true;
    adjCount++;
    vals.push(numMap[(x+1).toString()+';'+(y).toString()].id);
  }
  if (numMap[(x+1).toString()+';'+(y+1).toString()]){
    numMap[(x+1).toString()+';'+(y+1).toString()].valid = true;
    adjCount++;
    vals.push(numMap[(x+1).toString()+';'+(y+1).toString()].id);
  }
  if (numMap[(x+1).toString()+';'+(y-1).toString()]){
    numMap[(x+1).toString()+';'+(y-1).toString()].valid = true;
    adjCount++;
    vals.push(numMap[(x+1).toString()+';'+(y-1).toString()].id);
  }
  if (numMap[x.toString()+';'+(y-1).toString()]){
    numMap[x.toString()+';'+(y-1).toString()].valid = true;
    adjCount++;
    vals.push(numMap[(x).toString()+';'+(y-1).toString()].id);
  }
  if (numMap[(x-1).toString()+';'+y.toString()]){
    numMap[(x-1).toString()+';'+(y).toString()].valid = true;
    adjCount++;
    vals.push(numMap[(x-1).toString()+';'+(y).toString()].id);
  }
  if (numMap[(x-1).toString()+';'+(y-1).toString()]){
    numMap[(x-1).toString()+';'+(y-1).toString()].valid = true;
    adjCount++;
    vals.push(numMap[(x-1).toString()+';'+(y-1).toString()].id);
  }
  if (numMap[(x-1).toString()+';'+(y+1).toString()]){
    numMap[(x-1).toString()+';'+(y+1).toString()].valid = true;
    adjCount++;
    vals.push(numMap[(x-1).toString()+';'+(y+1).toString()].id);
  }
  let k = vals.length;
  for (let i = 0; i<k; i++){
    let value = vals.pop();
    if (vals.includes(value)){
      adjCount = adjCount - 1;
    } else {
      multi *= nums[value].val;
    }
  }
  if (adjCount == 2 && input[y][x] == '*'){
    a+=multi;
    console.log(y,x,multi);
  }
}



console.log(a);