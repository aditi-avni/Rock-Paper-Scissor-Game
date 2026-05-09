let userscore = 0;
let compscore = 0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawgame = () => {
    console.log("Game was draw.");
    msg.innerText = "Game is a draw. Play Again.";
    msg.style.backgroundColor = "#D4A373"; 
}

const showWinner = (userwin,userchoice,compchoice) => {
    if(userwin){
        userscore++;
        userScorePara.innerText = userscore;
        console.log("You wins.");
        msg.innerText = `You win. Your ${userchoice} beats ${compchoice}.`;
        msg.style.backgroundColor = "#6A994E";
    }else{
        compscore++;
        compScorePara.innerText = compscore;
        console.log("You lose.");
        msg.innerText = `You lose. Computer's ${compchoice} beats your ${userchoice}.`;
        msg.style.backgroundColor = "#BC4749";
    }
}


const playgame = (userchoice) => {
    console.log("User choice is ", userchoice);
    //comp choice 
    const compchoice = genCompChoice();
    console.log("Computer choice is ", compchoice);

    if(userchoice === compchoice){
        drawgame();
    }else {
        let userwin = true;
        if(userchoice === "rock"){
            //scissor, paper 
            userwin = compchoice === "paper" ? false : true;
        }else if(userchoice === "paper"){
            //rock, scissor
            userwin = compchoice === "scissor" ? false : true;
        }else {
            //scissor, rock
            userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin,userchoice,compchoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
}); 