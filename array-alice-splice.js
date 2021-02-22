//Arry Slice
const nums = [1,2,3,4,5,6,7,8,9,10];
const part = nums.slice(2,7);
console.log(part);

//array splice
const remove = nums.splice(2,5); //splice(2,5,77)
console.log(remove);
console.log(nums);

//array join
// const join = nums.join(",");
// console.log(join);