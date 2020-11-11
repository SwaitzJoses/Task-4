let arr1=[2,2,3,10,5];
let arr2=[6,7,1,7,10];


let array3 = arr1.concat(arr2);

array3=array3.sort(function(a, b) {
    return a - b;
  });

console.log(array3);
console.log(array3.length);
let median = array3.length/2;

console.log("median "+ array3[median]);

