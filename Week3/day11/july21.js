// // alert('Hello');

// if (1 < 2) console.log('correct');

// // const cup = 'Orange Juice';
// // let cup = prompt('Enter the drink:');
// // cup = Number(cup);

// let cup = Number(prompt('Enter the drink:'));


// switch (cup) {
//     case 1:
//         console.log('Good for breakfast!');
//         console.log('order one more for me');
//         break;
//     case 'Orange Juice':
//         console.log('too sweet!');
//         break;
//     // 
//     // 
//     default:
//         console.log('???');
// }



// cup === 100 ? console.log('I like it!') : console.log('What is wrong?');


// console.log(cup === 100 ? 'I like it!' : 'What is wrong?');

// const resultUser = cup === 100 ? 'I like it!' : 'What is wrong?';
// console.log(resultUser)
// alert(resultUser);



// // Practice / Assignment:
// // you will get a bill
// // then calucate tip based on bill
// // by the end show tip and final bill

// // eg:
// // if bill <= $30-- > tip rate 12 % 
// // if 30 < bill < 150  tip rate 15 %
// // if bil >= 150 tip rate 18 %



// // FUNCTIONS

// function playMusic() {
//     console.log('Playing the first song...for 3mins');
//     console.log('Playing the next song for 2mins...');
// }

// playMusic();
// playMusic();
// playMusic();
// playMusic();


// function playMusicPro(songName) {
//     console.log(`Playing ${songName} for 3mins..`);
// }

// playMusicPro('Happy Song');

// function playMusicProPlus(songName, msg) {
//     console.log(`Playing ${songName} for 3mins..`);

//     if (msg === 'yes') {

//         const nextSong = prompt(`Enter the name of next song you would lik to play`)
//         // console.log(`Playing ${nextSong} for 3mins..`);
//         playMusicPro(nextSong);
//     }
// }

// playMusicProPlus('Rock and Roll', 'yes');




// function playMusicProPlusFinal(songName) {
//     console.log(`Playing ${songName} for 3mins..`);
//     const songUser = prompt(`Would you lik to play another song (yes or no)?`)
//     if (songUser === 'yes') {
//         const newsong = prompt(`Enter the song name:`)
//         playMusicPro(newsong);
//     }
// }


// playMusicProPlusFinal('battles');




// // tips caculator Function Practice
// function calTip(bill1, biil2, bill3, bill4) {

// }

// // temputure convertor
// // BMI

// function calTip(bill1, biil2) {

//     if (bill1 < 30) {
//         const tip = bill1 * 0.1;
//         console.log(`Your tip amount is $${tip}`)

//         const totalBill = tip + bill1;
//         console.log(`Your total bill amount is:  $${totalBill}`)
//     }
//     else {
//         console.log(`Not functioning..`)
//     };

//     if (biil2 < 30) {
//         const tip = biil2 * 0.1;
//         console.log(`Your tip amount is $${tip}`)

//         const totalBill = tip + biil2;
//         console.log(`Your total bill amount is:  $${totalBill}`)
//     }
//     else {
//         console.log(`Not functioning..`)
//     };



// }

// calTip(12, 24)



// // arrow funtion

// const calTipNew2 = (bill1) => {
//     if (bill1 < 30) {
//         const tip = bill1 * 0.1;
//         console.log(`Your tip amount is $${tip}`)

//         const totalBill = tip + bill1;
//         return totalBill;
//     }
//     else {
//         return `Not functioning..`
//     };

// }

// console.log(calTipNew2(11));




// // const calTipNew = (bill1) => console.log('gog your bill:',bill1);

// // function expression

// const calTip3 = function (bill1) {
//     if (bill1 < 30) {
//         const tip = bill1 * 0.1;
//         const totalBill = tip + bill1;
//         return `Your tip amout is $${tip}, Your total bill is: $${totalBill} --from function expression example`;
//     }
//     else {
//         return `Not functioning..`
//     };
// }

// console.log(calTip3(1000));


// const calTip4 = function (bill1) {
//     let msgFinal;
//     if (bill1 < 30) {
//         const tip = bill1 * 0.1;
//         const totalBill = tip + bill1;
//         msgFinal = `Your tip amout is $${tip}, Your total bill is: $${totalBill} --from function expression example`;
//     }
//     else {
//         msgFinal = `Not functioning..`
//     };
//     return msgFinal
// }


// console.log(calTip4(11))


/////////array

// const client1 = 'Peter';
// const client2 = 'Jack';
// const client3 = 'John';

const clients = ['Peter', 'Jack', 'Johnd', 1996, ['peter@SpeechGrammarList.com', 'Jack@yahoo.com'], [1, 'Hello', 111 + 234]];

console.log(clients);
console.log(clients.length);

console.log(clients[1]);
console.log(clients[5]);
console.log(clients[clients.length - 1]);
console.log(clients[clients.length - 2]);


clients.push('address:111 new york,10001')
clients.pop();

clients.unshift('random value');
console.log(clients);
clients.shift();
console.log(clients);

// Object
const peter={
    firstName : "Peter",
    lastName : "Smith",
    birthYear : 1990,
    jobTitle : "student",
    score : [100,99,90,96],
    calAvgScore: function() {
        let sumScore = 0;
        for(let i = 0; i < this.score.length; i++){
            sumScore += this.score[i];  
        }
        return sumScore / this.score.length
    }
}

console.log(peter.calAvgScore());
console.log(peter['firstName']);

// Add a propety

peter.email = "peter@gmail.com"
console.log(peter);

// Loop

// The DOM

document.querySelector('h1').textContent = "hello";

document.querySelector('.p2').style.backgroundColor = "red";

function multiplyByTwo(x){
    return x*2;
}

let inp = Number(document.querySelector('input').value);

const btn = document.querySelector('button');

btn.addEventListener('click', multiplyByTwo(inp))