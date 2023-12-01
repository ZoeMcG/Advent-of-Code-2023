let input = ``.split('\n').map(x => x.split(''));

const nums = ['one','two','three','four','five','six','seven','eight','nine']

for (let x in input){
  row = input[x];
  let newLine = '';
  for (let i = 0; i<row.length; i++){
    let word = false;
    let testWord = '';
    for (let j = i; j<row.length; j++){
      testWord += row[j];
      if (nums.includes(testWord)){
        word = true;
        newLine += ((nums.indexOf(testWord)+1).toString());
      }
    }
    if (!word) newLine += row[i];
  }
  input[x] = newLine.split('').filter(x => x == parseInt(x));
}

let a = 0;
for (let row of input){
  a += parseInt(row[0]+row[row.length-1]);
}
console.log(a)