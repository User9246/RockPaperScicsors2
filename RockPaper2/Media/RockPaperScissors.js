// 0 = rock, 1 = paper, 2 = scissors, 3 = shoot
const CompOutputText = document.getElementById("ComputerOutput");

function CreateMatch(PlayerInput){
    ComputerChoice = Math.floor(Math.random() * 3);
    switch(ComputerChoice){
        case 0:
            CompOutputText.textContent = "Computer: Rock";
            break;
        case 1:
            CompOutputText.textContent = "Computer: Paper";
            break;
        case 2:
            CompOutputText.textContent = "Computer: Scissors";
            break;
    }
}