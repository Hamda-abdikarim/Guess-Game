let winAudio = new Audio('./win.mp3');
let  failAudio = new Audio('fail.mp3');
let  nearFail = new Audio('./nearfail.mp3');
var count =  0;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

const checkBtn = document.querySelector('.check');
 checkBtn.addEventListener('click', function(){
    count++; 

    const guessNumber = Number(document.querySelector('.guess').value);

    if(!guessNumber) {
        document.querySelector('.message').textContent = 'no number!';
    }
    else if (guessNumber !== secretNumber){
        document.querySelector('.message').textContent = guessNumber > secretNumber ? 'Too Hight'
        : 'Too low';
       document.querySelector('.guess').value = "";

       if(count ===4){
        nearFail.play();

       } else if (count === 5) {
        failAudio.play();
        Document.querySelector('.message').innerHTML = '<h4> No attempt left, try again! </h4>'
        checkBtn.disabled= true;
        checkBtn.getElementsByClassName.backgroundColor = 'rgba(220, 220, 220, 0.677)';
       }
    
    } 
    else if (count ===  5 && guessNumber === secretNumber){
        document.querySelector('.message').textContent  = 'correct Number';
        document.querySelector('.number').textContent  = secretNumber;
        document.querySelector('body').style.backgroundColor = '#008000';
    //    document.querySelector('.number').size 
        checkBtn.disabled= true;
       checkBtn.getElementsByClassName.backgroundColor = 'rgba(220, 220, 220, 0.677)';
       winAudio.play();
    }
    else if ( guessNumber === secretNumber){
        document.querySelector('.message').textContent  = 'correct Number';
        document.querySelector('.number').textContent  = secretNumber;
        document.querySelector('body').style.backgroundColor = '#008000';
    //    document.querySelector('.number').size 
        checkBtn.disabled = true;
       checkBtn.getElementsByClassName.backgroundColor = 'rgba(220, 220, 220, 0.677)';
       checkBtn.style.cursor = 'default';
       winAudio.play();
    }
   
 })

 const againBtn = document.querySelector('.btnagain');
 count = 0;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
 console.log("inside the again button" + secretNumber);
   againBtn.addEventListener('click', function(){
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = "";
    document.querySelector('.message').textContent = "Start guessing";
    document.querySelector('body').style.backgroundColor = '#f0db4f';
    checkBtn.style.backgroundColor = '#388697';
    checkBtn.disabled = false;
    checkBtn.style.cursor = 'pointer';

   });

