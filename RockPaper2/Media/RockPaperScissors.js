// 0 = rock, 1 = paper, 2 = scissors, 3 = shoot
const CompOutputText = document.getElementById("ComputerOutput");
let ComputerChoice;
let ComputerChoiceString;
let GameTies;
let GameLose;
let GameWin;

function CreateMatch(PlayerInput){
    ComputerChoice = Math.floor(Math.random() * 3);

    switch (ComputerChoice){
        case 0:
            ComputerChoiceString = "rock";
            break;
        case 1:
            ComputerChoiceString = "paper";
            break;
        case 2:
            ComputerChoiceString = "scissors";
            break;
        case 3:
            ComputerChoiceString = "shoot";
        default:
            ComputerChoiceString = "[ERROR]";
            console.log("ComputerChoiceString SWITCH, is the index out of rage?");
            break;
    }
    console.log({
        'ComputerString': ComputerChoiceString,
        'ComputerNum': ComputerChoice,
        'PlayerInput': PlayerInput
    });
    ComputerOutput.textContent = `Comp: ${ComputerChoiceString}, Player: ${PlayerInput}`;
    
}