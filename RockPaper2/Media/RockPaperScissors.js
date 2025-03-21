// 0 = rock, 1 = paper, 2 = scissors, 3 = shoot
const CompOutputText = document.getElementById("ComputerOutput");
const PlayerForwardInputText = document.getElementById("PlayerForwardInput");
const WinStatusText = document.getElementById("WinStatus");
let ComputerChoice;
let ComputerChoiceString;
let GameInfo = {
    'ComputerString': null,
    'ComputerNum': null,
    'PlayerInput': null
}
let GameOps = {
    'GameWins': 0,
    'GameLose': 0,
    'GameTies': 0
}

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
    GameInfo = {
        'ComputerString': ComputerChoiceString,
        'ComputerNum': ComputerChoice,
        'PlayerInput': PlayerInput
    };
    console.log(GameInfo);
    console.log(GameOps);
    PlayerForwardInputText.textContent = `^${PlayerInput}^`;
    
    if(ComputerChoice == "rock" && PlayerInput == "Paper" || PlayerInput == "Shoot"){
        //Players wins game
        CompOutputText.textContent = `Computer: ${ComputerChoiceString}`;
        GameOps.GameWins += 1;
    }
    else{
        CompOutputText = "[ERROR]"
    }
    WinStatusText.textContent = `${GameOps.GameWins} Wins, ${GameOps.GameTies} Ties, ${GameOps.GameLose} Loses`;
}