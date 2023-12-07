let input = `<INPUT>`.split('`').map(x => x.split(' ').filter(x => x== parseInt(x)));

let a = 1;
for (let i = 0; i < input[0].length; i++){
  let distance = input[1][i];
  let duration = input[0][i];
  let count = 0;
  for (let j = 0; j<duration; j++) if (((j * duration) - (j ** 2)) > distance) count++;
  a *= count;
}
console.log(a)