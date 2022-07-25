const peter = {
    firstName: 'Peter',
    lastName: 'Smith',
    birthYear: 1990,
    jobTitle: 'student',
    score: [100, 99, 90, 96],

    calAvgScore: function () {
        let addScore = 0;
        for(let i = 0; i < this.score.length; i++){
            addScore += this.score[i];
        }
        return addScore/this.score.length;
    },

    highScore: function() {
        let max = this.score[0];
        for(let i = 1; i < this.score.length; i++){
            if(this.score[i] > max){
                max = this.score[i];
            }
        }
        return max;
    },

    showSummary: function() {
        console.log(`${this.firstName} ${this.lastName} has completed ${this.score.length} tasks, and ${this.firstName}'s average score is ${this.calAvgScore()}, ${this.firstName}'s highest score is ${this.highScore()}`);
    }
};

function celToFar(celsius){
    if(celsius < -88 || celsius > 58){
        alert("User entered non number value");
    }
    else{
        return (celsius * 1.8) + 32;
    }
    
}

const celsius = prompt("Write a temperature in Celsius");

console.log(celToFar(celsius));



const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

btn1.addEventListener('click', function () {
    modal_container.classList.add('show');
});

btn2.addEventListener('click', function () {
    modal_container.classList.add('show');
});

btn3.addEventListener('click', function () {
    modal_container.classList.add('show');
});

close.addEventListener('click', function() {
    modal_container.classList.remove('show');
});

// let id = null;
// function myMove(){
//     let bird_box = document.getElementById('bird_box');
//     let pos = 50;
//     clearInterval(id);
//     id = setInterval(frame, 10);
//     function frame(){
//         if (pos == 500){
//             // clearInterval(id);
//             pos--;
//             bird_box.style.left = pos + 'px';
//         }
//         else{
//             pos++;
//             bird_box.style.left= pos + 'px';
//         }
//     }
// }

// window.onload = myMove;

const refreshRate = 1000 / 60;
const maxXposition = 2000;
let bird_box = document.getElementById('bird_box');
bird_box.classList.add('transform');
let speedX = 5;
let positionX = 200;
let transform = 1;


window.setInterval(()=> {
    positionX = positionX + speedX;
    if(positionX > maxXposition || positionX < 50){
        // If odd
        if(transform%2 != 0){
            bird_box.classList.remove('transform');
        }
        else{
            bird_box.classList.add('transform');
        }
        speedX = speedX * (-1);
        transform++;
        console.log('transform: ', transform);
    }
    bird_box.style.left = positionX + 'px';
}, refreshRate);