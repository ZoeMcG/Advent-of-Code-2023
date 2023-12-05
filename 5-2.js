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

let seedRanges = []

let firstRow = input[0].split(' ').splice(1).map(x => parseInt(x));
for (let i = 0; i<firstRow.length; i+=2){
  seedRanges.push([firstRow[i],firstRow[i]+firstRow[i+1]-1]);
}
maps.push(tempMap);
let lowestest = Infinity;

for (let seedRangeList of seedRanges){
  seedRangeList = [seedRangeList];
  for (let map of maps){
    let newSeedRange = [];
    let demarcations = [];
    for (let seedRange of seedRangeList){
      demarcations.push(...seedRange);
      for (let submap of map){
        if (submap[1] >= seedRange[0] && submap[1] < seedRange[1]) demarcations.push(submap[1]);
        if (submap[1]+submap[2]-1 >= seedRange[0] && submap[1]+submap[2]-1 < seedRange[1]) demarcations.push(submap[1]+submap[2]-1);
      }
    }
    demarcations = demarcations.sort(function (a, b) {  return a - b;  });
    for (let i = 0; i<demarcations.length-1; i++){
      let lower = demarcations[i];
      let upper = demarcations[i+1];
      let intervalChanged = false;
      for (let submap of map){
        if (lower >= submap[1] && lower < submap[1]+submap[2]){
          newSeedRange.push([lower-submap[1]+submap[0],upper-submap[1]+submap[0]]);
          intervalChanged = true;
        }
      }
      if (!intervalChanged) newSeedRange.push([lower,upper]);
    }
    seedRangeList = [...newSeedRange];
  }
  let lowest = Infinity;
  for (let range of seedRangeList){
    if (range[0] < lowest) lowest = range[0];
  }
  if (lowest < lowestest && lowest != 0) lowestest = lowest;
}

console.log(lowestest);