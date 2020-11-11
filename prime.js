let num=[1,2,3,4,5,6,7,8,9,10];

prime=[];

for(let i=1; i<=num.length;i++) {
    if(num[i] === 2 || num[i] === 3)
{
    prime.push(num[i]);
}
else if( num[i]%2 === 1 && num[i]%3 !== 0 ){
    prime.push(num[i])
}
}

console.log(prime);