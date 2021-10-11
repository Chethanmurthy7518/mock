var arr= [1,2,3,4,5,6,7,8,9,10];
var even=[];
var odd=[];
console.log(arr)

arr.map(val => val%2 == 0 ? even.push(val) : odd.push(val));

console.log(even);
console.log(odd);