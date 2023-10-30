// Race day
// dev30  (codecademy) exercise

// test data - temporary code
// let registeredEarly = false;
// let ageOfRunner = 56;
// let registeredEarly = true;
// let ageOfRunner = 56;
// let registeredEarly = false;
// let ageOfRunner = 18;
// let registeredEarly = true;
// let ageOfRunner = 18;
// let registeredEarly = false;
// let ageOfRunner = 16;
// let registeredEarly = true;
// let ageOfRunner = 16;

// assign initial random race number
let raceNumber = Math.floor(Math.random() * 1000);
console.log(raceNumber);

// has runner registered early
let registeredEarly = false;

// has runner registered early
let ageOfRunner = 56;

// early registered adult
if (registeredEarly && ageOfRunner >18 ) {
    raceNumber += 1000;
    console.log(raceNumber);
} 

//  adult race time-- for early registered adult
if (registeredEarly && ageOfRunner >18 ) {
    console.log(`You will race at 9:30am. Your race number is ${raceNumber}`);
    //  adult race time-- for late registered adult
}  else if (registeredEarly===false && ageOfRunner >18 ) {
    console.log(`You will race at 11:00am. Your race number is ${raceNumber}`);

    // youth race time
} else if (ageOfRunner <18 ) {
    console.log(`You will race at 12:30pm. Your race number is ${raceNumber}`);
} 

    // exactly 18 - contact the registration desk
else if (ageOfRunner =18 ) {
    console.log(`Please contact the registration desk`);
} 
