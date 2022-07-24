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