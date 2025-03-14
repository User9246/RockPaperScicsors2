// 0 = rock, 1 = paper, 2 = scissors, 3 = shoot
const CompOutputText = document.getElementById("ComputerOutput");
let GameTies;
let GameLose;
let GameWin;

function CreateMatch(PlayerInput){
    ComputerChoice = Math.floor(Math.random() * 3);

    if(PlayerInput == `Rock` && ComputerChoice == 0 || PlayerInput == `Paper` && ComputerChoice == 1 || PlayerInput == `scissors` && ComputerChoice == 2){
        CompOutputText.textContent = "Computer: Tie!";
        GameTies += 1;
    }
    else if(PlayerInput == `Rock` && ComputerChoice == 1 || PlayerInput == `Paper` && ComputerChoice == 2){
        CompOutputText.textContent = "Computer: Paper!";
        WinStatus.textContent = "You lose!"
        GameLose += 1;
    }
    else{
        CompOutputText.textContent = "Computer: [ERROR]!";
        console.log("Error in rock paper scisisior")
    }
}