// Question 3

// science = Physics, Chemistry, Biology, Technical-Drawing
// social science = Accounting, Commerce, Marketing, Geography
//arts = Government, Economics, Literature, History
// general = English, Mathematics


let studentSubject = 'Science'


if (studentSubject = "science"){
    console.log("Physics, Chemistry, Biology, Technical-Drawing")
}

else if (studentSubject = "social science"){
    console.log("Accounting, Commerce, Marketing, Geography")
}

else if (studentSubject = "arts"){
    console.log("Government, Economics, Literature, History")
}

else {
    console.log("English, Mathematics")
}


// Question 5

let num = 50;;
let pwr = 1;
const arr = [];
while (pwr < num) {
    pwr *= 2;
    if (Math.abs(num - pwr / 2) < Math.abs(num - pwr)) {
    }
    arr.push(pwr);
}

let result;
for (let a = 0; a < arr.length; a++) {
  let firstnum = arr[arr.length - 2];
  let numone = num - firstnum;
  let lastnum = arr[arr.length - 1];
  let numlast = num - lastnum;
  
  if (numone <= Math.abs(numlast)) {
    result = firstnum;
  } else {
    result = lastnum;
  }
}
console.log(`The number ${result} is the power of 2 nearest to ${num}`)