console.log("hello: ", 2*5)

const textbox = "coffee"
console.log(textbox)

document.querySelector('button').addEventListener('click', function(){
    const userInput = prompt('Enter your favorite drink');
    if (userInput == 'Coffee'){
        document.querySelector('h1').textContent="Coffee";
    }
    else{
        document.querySelector('h1').textContent="Invalid Input";
        document.querySelector('body').style.backgroundColor = 'red';
    }
})
