var arr=[2,3,4,5,6,7,8]
// max of arr
var max=arr.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(max);

// sum of arr
var sum=arr.reduce((n1,n2)=>n1+n2)
console.log(sum);

// min of arr
var min=arr.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(min);