let random_number=Math.floor(Math.random()*100)
console.log(random_number);
let guess_number=0;

let guess=document.getElementById("guess")
let btn=document.getElementById("btn")
let guess_times=document.getElementById("guess_times")

btn.addEventListener("click",()=>{
    if (guess.value=="") {
        return ;
    }
    guess_number++;
    if (guess.value==random_number) {
        correct.innerHTML="Correct Number";
    }
    else if(guess.value>random_number){
        correct.innerHTML="Your Guess is Higher";
    }
    else{
        correct.innerHTML="Your Guess is Lower";
    }
    guess_times.innerHTML=guess_number;

    guess.value="";
})