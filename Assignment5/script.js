// Part A 
console.log("PART A");
const lucasHeight = 1.76784;
const lucasMass = 77.1107;
const petterHeight = 1.8288;
const petterMass = 92.9864;

const lucasBMI = lucasMass / (Math.pow(lucasHeight, 2));
const petterBMI = petterMass / (Math.pow(petterHeight, 2));

const lucasHigherBMI = petterBMI > lucasBMI;

console.log(`the BMI of Petter is ${petterBMI}, the BMI od Lucas is ${lucasBMI}. Petter's BMI is higher than Lucas's BMI that is ${lucasHigherBMI}`);

//Part B

console.log("PART B");
const cel = 30;
const celToFar = (cel*1.8) + 32;
console.log(`${cel}°C is ${celToFar}°F`);

const far = 90;
const farToCel = (far-32) * .5556;
console.log(`${far}°F is ${farToCel}°C`);

// Part C

console.log("PART C");

if(lucasBMI > petterBMI){
    console.log(`Lucas' BMI (${lucasBMI}) is higher than Peter's (${petterBMI})!`);
}
else{
    console.log(`Peter's BMI (${petterBMI}) is higher than Lucas' (${lucasBMI})!`);
}

// Part D

console.log("PART D");

const convertCelsiusToFahrenheit = (x) => console.log(`${x}°C is ${(x*1.8) + 32}°F`);
convertCelsiusToFahrenheit(100);
const converFahrenheitToCelsius = (y) => console.log(`${y}°F is ${(y-32) * .5556}°C`);
converFahrenheitToCelsius(32);
