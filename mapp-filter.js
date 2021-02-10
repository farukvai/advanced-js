//How we use for loop ago

const age =[1,2,3,4,5,6,7,8,9];
let store = [];

for (let i = 0; i < age.length; i++) {
    const element = age[i];
   const result = element*2;
    store.push(result);
    
}
//console.log(store);


//MAP we can set here three pera metter

// const number = [2,3,4,5,6,7,8];

// number.map(function(element,index,array){
//     console.log(element,index,array);
// });



// const number = [2,3,4,5,6,7,8];

// const squre=number.map(function(element){
//     return element*element;
// });

// console.log(squre);


//We can do this map more easily
const number = [2,3,4,5,6,7,8];
const squre = number.map(x=> x * x);
console.log(squre);

//Filter 
//const result=number.filter(x=> x>4);
//console.log(result);

//find
const result=number.find(x=> x>4);
console.log(result);

//reduce

