console.log("Hello from Stone Paper Scissor Game");
const header=document.querySelector('.header');
const rock=document.querySelector('#rock');
const paper=document.querySelector('#paper');
const scissor=document.querySelector('#scissor');

let computer_score=0;
let player_score=0;
let round=0;

function getComputerChoice(){
    console.log("getcomputerchoice called");
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
console.log("event listner not called");

rock.addEventListener('click',function(){
    let computer=getComputerChoice();
    let player="Stone";
    console.log(`${computer}" player:" ${player}`)
    let result=play(player,computer);
    console.log(`${result}`);
    const new_p=document.createElement('p');
    new_p.style.cssText='color: black;';
    new_p.classList.add('new');
    if(result==-1){    
        new_p.textContent = 'Enter A valid input';  
    }
    else{
        round++;
        if(result===1){
            // new_p.textContent = `You Won this round your score ${player_score+1}`;
            new_p.textContent = `You Won this round your score`;
            player_score++;
        }
        else if(result==2)
        {
            //new_p.textContent = `You lose this round your score ${player_score}`;
            new_p.textContent = `You lose this round your score`;
            computer_score++; 
        }
    }
    header.appendChild(new_p);
    if(round==5){
        const result_5=document.createElement('p');
        result_5.classList.add('new');
    if(computer_score>player_score)
        result_5.textContent = "You Lose";
    else if(computer_score<player_score)
        result_5.textContent = "You Won";
    else
        result_5.textContent = "Draw";   
    header.appendChild(result_5);
    }

});
paper.addEventListener('click',function(){
    let computer=getComputerChoice();
    let player="Paper";
    console.log(`${computer}" player:" ${player}`)
    let result=play(player,computer);
    console.log(`${result}`);
    const new_p=document.createElement('p');
    new_p.style.cssText='color: black;';
    new_p.classList.add('new');
    if(result==-1){    
        new_p.textContent = 'Enter A valid input';  
    }
    else{
        round++;
        if(result===1){
            // new_p.textContent = `You Won this round your score ${player_score+1}`;
            new_p.textContent = `You Won this round your score`;
            player_score++;
        }
        else if(result==2)
        {
            //new_p.textContent = `You lose this round your score ${player_score}`;
            new_p.textContent = `You lose this round your score`;
            computer_score++; 
        }
    }
    header.appendChild(new_p);
    if(round==5){
        
        const result_5=document.createElement('p');
        result_5.classList.add('new');
    if(computer_score>player_score)
        result_5.textContent = "You Lose";
    else if(computer_score<player_score)
        result_5.textContent = "You Won";
    else
        result_5.textContent = "Draw";   
    header.appendChild(result_5);
    }

});

scissor.addEventListener('click',function(){
    let computer=getComputerChoice();
    let player="Scissor";
    console.log(`${computer}" player:" ${player}`)
    let result=play(player,computer);
    console.log(`${result}`);
    const new_p=document.createElement('p');
    new_p.style.cssText='color: black;';
    new_p.classList.add('new');
    if(result==-1){    
        new_p.textContent = 'Enter A valid input';  
    }
    else{
        round++;
        if(result===1){
            // new_p.textContent = `You Won this round your score ${player_score+1}`;
            new_p.textContent = `You Won this round your score`;
            player_score++;
        }
        else if(result==2)
        {
            //new_p.textContent = `You lose this round your score ${player_score}`;
            new_p.textContent = `You lose this round your score`;
            computer_score++; 
        }
    }
    header.appendChild(new_p);
    if(round==5){
        const result_5=document.createElement('p');
        result_5.classList.add('new');
    if(computer_score>player_score)
        result_5.textContent = "You Lose";
    else if(computer_score<player_score)
        result_5.textContent = "You Won";
    else
        result_5.textContent = "Draw";   
    header.appendChild(result_5);
    }

});
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
console.log("event listner above");
