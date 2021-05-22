//for calculating the age of an individual

function ageCalculator (dob) {
    const  age = dob;
    const year = age.slice(-4);
    var curyear = new Date().getFullYear()
    if (parseInt(year) < curyear){
      console.log(`Your current age is ${curyear - year}`);
    }else{
      console.log('Enter a reasonable date');
    }
  
  };
  
  ageCalculator('10/14/2000');
  ageCalculator('10/14/3000');
  ageCalculator('10/14/absc');
  ageCalculator('10/14/2y00');

//for findng duplicated elements in an array

const arr = [1,2,6,2,9,9,8,1,2]

function checkDuplicate(a){
 let counts = {}

 for(let i =0; i < arr.length; i++){ 
     if (counts[arr[i]]){
     counts[arr[i]] += 1
     } else {
     counts[arr[i]] = 1
     }
    }  
    for (let prop in counts){
        if (counts[prop] >= 2){
            console.log(`${prop} appeared ${counts[prop]} times in the array `);
        }
    }
//   console.log(counts)
}
checkDuplicate(arr)

//convert day, month and year to date format
function dateformatter () {
    const day = prompt('Enter the day')
    const month = prompt('Enter themonth')
    const year = prompt('Enter the year')
    var curyear = new Date().getFullYear()
  
    if(parseInt(day) <=31 && parseInt(month) <= 12 && parseInt(year) <= curyear){
      console.log(`${day}/${month}/${year}`);
    }
    else{
      console.log('Enter a better info');
    }
  };
  dateformatter();