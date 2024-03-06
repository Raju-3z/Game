//from reset button
let Score = JSON.parse(localStorage.getItem('score'))||{
    wins: 0,
    loses: 0,
    draw: 0
};


// if(!Score){
//     wins=0,
//     loses=0,
//     draw=0
// };
update()

function playgame(playermove) {
    
    const computerMove = pickcomputerMove();
    let result = '';

    // Check for player move 'Rock'
    if (playermove === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'Tie';
        } else if (computerMove === 'Paper') {
            result = 'You lose';
        } else if (computerMove === 'Scissor') {
            result = 'You win';
        } console.log(`You ${playermove} - computer ${computerMove}`);
    }
    // Check for player move 'Paper'
    else if (playermove === 'Paper') {
        if (computerMove === 'Rock') {
            result = 'You win';
        } else if (computerMove === 'Paper') {
            result = 'Tie';
        } else if (computerMove === 'Scissor') {
            result = 'You lose';
        } console.log(`You ${playermove} - computer ${computerMove}`)
    }
    // Check for player move 'Scissor'
    else if (playermove === 'Scissor') {
        if (computerMove === 'Rock') {
            result = 'You lose';
        } else if (computerMove === 'Paper') {
            result = 'You win';
        } else if (computerMove === 'Scissor') {
            result = 'Tie';
        } console.log(`You ${playermove} - computer ${computerMove}`)
    }

    if(result==='You win' ){
        Score.wins=Score.wins+1;
    }else if (result==='You lose'){
        Score.loses++;
    }else if(result==='Tie'){
        Score.draw+=1
    };
    localStorage.setItem
    ('score',JSON.stringify(Score));

    update()

    document.querySelector('.result').innerHTML=result;

    document.querySelector('.move').innerHTML=`You <img src="./img/${playermove}.png" alt="" class="emo i"> <img src="./img/${computerMove}.png" alt=""class="emo i"> Computer`;

    // Display result in an alert
}
function update() { document.querySelector('.update-score')
    .innerHTML=
    `Wins ${Score.wins} | loses ${Score.loses} | draws ${Score.draw}`}

function pickcomputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';

    // Assign computer move based on random number
    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'Rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'Paper';
    } else if (randomNumber >= 2/3 && randomNumber <= 1) {
        computerMove = 'Scissor';
    }

    return computerMove;
}