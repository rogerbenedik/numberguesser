// game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// ui elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');
      

      //assign UI min and maxx
      minNum.textContent = min;
      maxNum.textContent = max;
      //play agian event listen
      game.addEventListener('mousedown', function(e){
          if(e.target.className === 'play-again'){
              window.location.reload();
          }


      });
      // listen for guess
      guessBtn.addEventListener('click', function(){
       let guess = parseInt(guessInput.value);

       //validate
       if(isNaN(guess) || guess < min || guess > max){
           setMessage(`Please Enter a number between ${min} and ${max}`, 'red');
       }
       //check if won
       if( guess === winningNum){
       gameOver(true, `${winningNum} is correct!, YOU WIN`);
       } else{
        //wrong number
        guessesLeft -= 1;
        if(guessesLeft === 0){
            //game over
           gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);

        }else{
            //game cintunes - answer wrong
            //change color border
            guessInput.style.borderColor = 'red';
            //clear input
            guessInput.value = '';


            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
        }
       }
      });

      // game over
      function gameOver(won, msg){
        let color;
        won === true ? color = 'green' : color = 'red';
        guessInput.disabled = true
        //change border color
        guessInput.style.borderColor = 'green';
        // set text color
        message.style.color = color;
        //set message
        setMessage(msg);
        // play agian
        guessBtn.value = 'Play Again';
        guessBtn.className += 'play-again';
      }
      // get winning number
      function getRandomNum(min, max){
          return Math.floor(Math.random()*(max-min+1)+1);

      }
      // set message

      function setMessage(msg, color){
          message.style.color = color;
          message.textContent = msg;
      }