
function list(names) {
  let result = [];
  ;
  const values = Object.values(names);
  //   console.log(values);
  
  for (let i = 0; i < values.length; i += 1) {
    // console.log(values.length)
    if (values[values.length - 1] === values[i]) {
      
      result.push(`${values[i].name}`);
      
    } else if (values[values.length - 2] === values[i]) {
      result.push(`${values[i].name} &`);
     } 
    else if (values.length !== 1) {
      result.push(`${values[i].name},`);
    }
  }
  result = result.join(' ')
  // result = result.split()
  return result;
}
// console.log(list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }]));

 console.log(list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }]));
// returns 'Bart, Lisa & Maggie'

 console.log(list([{ name: "Bart" }, { name: "Lisa" }]));
// returns 'Bart & Lisa'

 console.log(list([{ name: "Bart" }]));
// returns 'Bart'

 console.log(list([]));
// returns ''
