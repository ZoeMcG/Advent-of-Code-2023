let input = `<INPUT>`.split('\n');

let maps = [];

let tempMap = [];
let textRow = false;
for (let row = 3; row<input.length;row++){
  if (textRow){
    textRow = false;
  }
  else if (input[row] == ''){ 
    textRow = true;
    maps.push([...tempMap]);
    tempMap = [];
  }
  else {
    tempMap.push(input[row].split(' ').map(x => parseInt(x)));
  }
}

let seeds = input[0].split(' ').splice(1).map(x => parseInt(x));

maps.push(tempMap);

let lowest = Infinity;

for (let seed of seeds){
  for (let map of maps){
    let newSeed = seed;
    console.log(seed);
    for (let submap of map){
      if (seed >= submap[1] && seed < submap[1] + submap[2]){
        newSeed = (seed - submap[1] + submap[0]);
      }
    }
    seed = newSeed;
  }
  if (seed < lowest) lowest = seed;
}
console.log(lowest);