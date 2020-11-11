var array= [1,2,3,4,5,6]
const rotateArray=(num,rotateCount)=> {
num2=[];
for(i=0;i<rotateCount;i++){
var k = num.pop();
num2.push(k);
}
var jj=num2;
jj.join(" ");
// var p=jj.join(" ");
// console.log(parseInt(p));
for(i=0;i<rotateCount;i++){
num.unshift(jj[i]);
}
console.log(num)
// console.log(k)
}
rotateArray(array, 3);