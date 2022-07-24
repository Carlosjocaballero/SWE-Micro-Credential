// // From JSON to JavaScript
// JSON.parse()

// // From Javascript to JSON
// JSON.stringify()

const myArray1 = [];
const myArray = new Array(1,11,'JAck', 'Peter');
myArray.push();
console.log(myArray);



const url = 'https://wilsonestelle85.github.io/pets1.json'

let myRequest  = new XMLHttpRequest();

myRequest.open('GET', url);


const petbtn = document.querySelector('petbtn');


petbtn.addEventListener('click', function() {

    myRequest.onload=function(){
    console.log(myRequest.responseText);
    let myData = myRequest.responseText;
    let myDataJSObj = JSON.parse(myData)
    console.log(myDataJSObj[0]);
    }

myRequest.send();
});

