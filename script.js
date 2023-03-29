let randNum;
let userGuess=[];
// console.log(randNum);
const init= ()=>{
    userGuess=[];
    i=0;
    document.getElementById("guess").disabled=false;
    randNum= Math.floor(Math.random()*100);
    console.log(randNum);
    document.getElementById("start").style.display="none";
    document.getElementById("gamearea").style.display="none";
    activateEasyBtn();
    activateHardBtn();
}
let n,i;
let win=false;


const enterBtn=document.getElementById('enter');
enterBtn.addEventListener('click',()=>{
    if(i<n){
        if(document.getElementById("guess").value!=""){
            const item = document.getElementById("guess");
            i++;
            playGame(item,i);
            item.value="";
                if(win==true){
                    document.getElementById("start").style.display="flex";
                    document.getElementById("note").innerHTML=`<h1>You Won!!</h1>`
                    document.getElementById("attempts").innerHTML=`<p>${i}</p>`
                    let allNum="";
                    allNum+=userGuess[0];
                    for(let j=1;j<userGuess.length;j++){
                        allNum+=", "
                        allNum+=userGuess[j];
                    }
                document.getElementById("guesses").innerHTML=allNum;
                document.getElementById("guess").disabled=true;

                }   
            }
    }
    else{
        if(win==true){
            document.getElementById("start").style.display="flex";
            document.getElementById("note").innerHTML=`<h1>You Won!!</h1>`
            document.getElementById("attempts").innerHTML=`<p>${i}</p>`
            let allNum="";
            allNum+=userGuess[0];
            for(let j=1;j<userGuess.length;j++){
                allNum+=", "
                allNum+=userGuess[j];
            }
        document.getElementById("guesses").innerHTML=allNum;
        document.getElementById("guess").disabled=true;
        }
        else{
        document.getElementById("start").style.display="flex";
            document.getElementById("note").innerHTML=`<h1>You lost! correct number was ${randNum}</h1>`
            document.getElementById("attempts").innerHTML=`<p>${i}</p>`
            let allNum="";
            allNum+=userGuess[0];
            for(let j=1;j<userGuess.length;j++){
                allNum+=", "
                allNum+=userGuess[j];
            }
        document.getElementById("guesses").innerHTML=allNum;
        document.getElementById("guess").innerHTML="Game over!";
        document.getElementById("guess").disabled=true;
        }
    }
})
document.getElementById("guess").addEventListener('keyup',(event)=>{
    event.preventDefault();
    if(event.key==='Enter'){
        enterBtn.click();
    }
})


document.getElementById("guess").addEventListener('keyup',(event)=>{
    if(event.key==='Enter'){
        document.getElementById("enter").click();
    }

})
// start button ::
document.getElementById("start").addEventListener('click',()=>{
    init();
    document.getElementById("guess").value="";
    document.getElementById("container").style.display="flex";
    document.getElementById("gamearea").style.display="none";
    document.getElementById("note").innerHTML=`<h1 id="note">Your Guess</h1>`;
    document.getElementById("attempts").innerHTML=`<p>${i}</p>`
    let allNum="0";
    document.getElementById("guesses").innerHTML=allNum;
    win=false;
})

function activateEasyBtn(){
    let easyBtn=document.querySelector(".easyBtn");
    easyBtn.addEventListener('click',()=>{
        document.getElementById("gamearea").style.display="flex";
        document.getElementById("container").style.display="none";
        n=10;
        i=0;
    })
}


function activateHardBtn(){
    let hardBtn=document.querySelector(".hardBtn");
    hardBtn.addEventListener('click',()=>{
        document.getElementById("gamearea").style.display="flex";
        document.getElementById("container").style.display="none";
        n=5;
        i=0;
    })
}

function playGame(item,i){
    const num=item.value;
        if(num==randNum){
            document.getElementById("start").style.display="flex";
            document.getElementById("note").innerHTML="You guessed it right 😘"
            document.getElementById("attempts").innerHTML=`<p>${i}</p>`
            userGuess.push(num);
            let allNum="";
            allNum+=userGuess[0];
            for(let j=1;j<userGuess.length;j++){
                allNum+=", "
                allNum+=userGuess[j];
            }
            document.getElementById("guesses").innerHTML=allNum;
            win=true;
        }
        else if(num>randNum){
            document.getElementById("note").innerHTML="Your guess is too high 😊🤌"
            document.getElementById("attempts").innerHTML=`<p>${i}</p>`
            userGuess.push(num);
            let allNum="";
            allNum+=userGuess[0];
            for(let j=1;j<userGuess.length;j++){
                allNum+=", "
                allNum+=userGuess[j];
            }
            document.getElementById("guesses").innerHTML=allNum;
        }
        else{
            document.getElementById("note").innerHTML="Your guess is too low 😊🤌"
            document.getElementById("attempts").innerHTML=`<p>${i}</p>`
            userGuess.push(num);
            let allNum="";
            allNum+=userGuess[0];
            for(let j=1;j<userGuess.length;j++){
                allNum+=", "
                allNum+=userGuess[j];
            }
            document.getElementById("guesses").innerHTML=allNum;
        }
}
