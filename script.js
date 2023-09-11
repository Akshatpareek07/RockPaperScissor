console.log("Hello from Stone Paper Scissor Game");
function getComputerChoice(){
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    let a=randomNumber(1,3);
    if(a==1)
    return "Stone";
    else if(a==2)
    return "Paper";
    else
    return "Scissor";
}

function game(){
    let computer_score=0;
    let player_score=0;
    function play(player,computer){
        if(player.toUpperCase()===computer.toUpperCase())
        return 0;
        else if(player.toUpperCase()==="STONE"&&computer.toUpperCase()==="PAPER")
        return 2;
        else if(player.toUpperCase()==="PAPER"&&computer.toUpperCase()==="SCISSOR")
        return 2;
        else if(player.toUpperCase()==="STONE"&&computer.toUpperCase()==="SCISSOR")
        return 1;
        else if(computer.toUpperCase()==="STONE"&&player.toUpperCase()==="PAPER")
        return 1;
        else if(computer.toUpperCase()==="PAPER"&&player.toUpperCase()==="SCISSOR")
        return 1;
        else if(computer.toUpperCase()==="STONE"&&player.toUpperCase()==="SCISSOR")
        return 2;
        else
        return -1;
    }
    for(let i=1;i<=5;){
        let player=prompt("Enter Stone, Paper or Scissor :");
        let result=play(player,getComputerChoice());
        if(result==-1){
            console.log("Enter the valid input");
        }
        else{
            i++;
            if(result===1){
                console.log(`You Won this round your score ${player_score+1}`);
                player_score++;
            }
            else if(result==2)
            {
                console.log(`You lose this round your score ${player_score}`);
                computer_score++;
            }
        }
    
    }
    if(computer_score>player_score)
    console.log("You Lose");
    else if(computer_score<player_score)
    console.log("You Won");
    else
    console.log("Draw");   
}
game();