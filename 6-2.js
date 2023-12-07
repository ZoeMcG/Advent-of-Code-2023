let input = `<INPUT>`.split('\n').map(x => x.split('').filter(x => x== parseInt(x)).join('')).map(x => parseInt(x));

let duration = input[0];
let distance = input[1];

function checkTime(x){
  if (((x * duration) - (x ** 2)) > distance) return true;
  return false;
}

let LH = duration;
let LL = 0;
let HL = 0;
let HH = duration;

let foundLow = false;
let foundHigh = false;

while (!foundLow || !foundHigh){
  console.log('[',LL,'-',LH,']' , '[',HL,'-',HH,']');
  let newLow = Math.round((LL+LH)/2);
  let newHigh = Math.round((HL+HH)/2);
  checkTime(newLow) ? LH = newLow : LL = newLow;
  checkTime(newHigh) ? HL = newHigh : HH = newHigh;
  if (LH - LL === 1) foundLow = true;
  if (HH - HL === 1) foundHigh = true;
}

console.log(HH-LH);