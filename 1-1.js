let input = `<INPUT>`.split('\n').map(x => x.split('').filter(y => y == parseInt(y)));

let a = 0;
for (let row of input){
  a += parseInt(row[0]+row[row.length-1]);
}
console.log(a)
