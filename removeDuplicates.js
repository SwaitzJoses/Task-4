arr=[1,1,2,3,4,5,5];

uniqueArray = arr.filter(function(item, pos) {
    return arr.indexOf(item) == pos;
})
console.log(arr);
console.log("Removed duplicate array given below");
console.log(uniqueArray);