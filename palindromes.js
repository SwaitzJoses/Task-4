var arr= "ada daa asa aaaasa";
var arr1= arr.split(" ")
var d=arr.split('').reverse().join('')

var arr2=d.split(" ").reverse();
console.log(arr1);
console.log(arr2);

var palindrome=[];

for(let i=0;i< arr2.length ;i++){
if(arr1[i]===arr2[i]){
palindrome.push(arr1[i]);

}
}
console.log(" Array of palindrome given below");
console.log(palindrome);