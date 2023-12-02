input = `<INPUT>`.split('\n').map(x => x.split(';').map(x => x.split(' ')).map(x => x[0] == 'Game' ? x.splice(2) : x).map(x => x.map(x => x.replace(/\W/g, ''))));

let a = 0;
for (let row in input){
  let smallests = {'red':0,'blue':0,'green':0};
  for (let pull of input[row]) for (let i = 0; i<pull.length-1; i++) if (pull[i] == parseInt(pull[i])) if (parseInt(pull[i]) > smallests[pull[i+1]]) smallests[pull[i+1]] = parseInt(pull[i]);
  a += (smallests['red']*smallests['blue']*smallests['green']);
}
console.log(a);