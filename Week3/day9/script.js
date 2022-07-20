console.log('Comparison Result: ', 1 == '1')
console.log('Comparison Result: ', 1 === '1')
console.log('Comparison Result: ', 1 != '1')
console.log('Comparison Result: ', 1 !== '1')

console.log('Hello' + 1,1234, 'hello again', 123 + 'Tuesday' + (2+4));
console.log('Hello' + 1 + 1234 + 'hello again' + 123 + 'Tuesday' + (2+4));

const randomNum = 1234;

// Template literals

console.log(`hello 1 ${randomNum} hello again 123 Tuesday ${2+4}`)

clienAname = 'Anna';
petClientA = 'Tom';
petClientAAge = '25';

console.log(`Log: Client's name: ${clienAname}. Pet's name: ${petClientA}. ${petClientA}'s age: ${petClientAAge}`);

let origNum = 100;
let num = 10;
while(num > 0){
    console.log(origNum);
    console.log(num)
    num--;
}

// Trusy value / falsy values
// flasy values: 0, '' , null, undefined, NaN

console.log(Number("1"));

if(Number("1")){
    console.log("1");
}
else{
    console.log("0")
}

let ageUser = 12;


if(ageUser){
    console.log("1");
}
else{
    console.log("0")
}

//Array