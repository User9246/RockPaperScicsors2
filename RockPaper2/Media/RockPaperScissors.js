// 0 = rock, 1 = paper, 2 = scissors, 3 = shoot
const CompOutputText = document.getElementById("ComputerOutput");

function CreateMatch(PlayerInput){
    ComputerChoice = Math.floor(Math.random() * 3);

    if(PlayerInput == `Rock` && ComputerChoice == 0 || PlayerInput == `Paper` && ComputerChoice == 1 || PlayerInput == `scissors` && ComputerChoice == 2){
        CompOutputText.textContent = "Computer: Tie!";
    }
}