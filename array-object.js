const girlFriendList = [
    {id:21, name:"Sima Akter", comitment:"I Love you so much"},
    {id:21, name:"Faria Khan"},
    {id:21, name:"Aysa Akter"},
    {id:21, name:"Sajeda Akter"},
    {id:21, name:"MOrium Akter"},
    {id:21, name:"Tamanna Akter"},
    {id:21, name:"Dolon Akter"},
];
//console.log(girlFriendList.length);


// Old Way for loop
// const name = [];
// for (let i = 0; i < girlFriendList.length; i++) {
//     const element = girlFriendList[i]; 
//     name.push(element.name);
// }
// console.log(name);


//Latest way
const gfName=girlFriendList.map(gf=> gf.name);
console.log(gfName);
