var arr = [1,2,3,4,5,6,7,8,9,10];

var large = Math.max(...arr)
// console.log(large)

 arr.splice(arr.indexOf(large),1)
//  console.log(arr)

var seclarge = Math.max(...arr)
console.log(seclarge)
