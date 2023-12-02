input = `<INPUT>`.split('\n').map(x => x.split(';').map(x => x.split(' ')).map(x => x[0] == 'Game' ? x.splice(2) : x).map(x => x.map(x => x.replace(/\W/g, ''))));

let maxes = {'red':12,'green':13,'blue':14};

let a = 0;
for (let row in input){
  let valid = true;
  for (let pull of input[row]) for (let i = 0; i<pull.length-1; i++) if (pull[i] == parseInt(pull[i])) if (parseInt(pull[i]) > maxes[pull[i+1]]) valid = false;
  if (valid) a+= parseInt(row) + 1;
}
console.log(a);