//My Second Assignment (Project01_number_guessing_game)
// Muhammad Arshad
// PIAIC BATCH NO. 51 KARACHI
// REG NO PIAIC137679



import inquirer from "inquirer"

let generatedNo = Math.floor (Math.random()*10)+1;


let number = await inquirer.prompt({
    type:"input",
    name:"userGuess",
    message:"please guess the number (between 1 to 10)"
});

if (number.userGuess === generatedNo) {
    console.log("Wao , it's correct ")
}else {
    console.log(`Sorry! the correct number was ${generatedNo}: wanna play again !`)
}






















