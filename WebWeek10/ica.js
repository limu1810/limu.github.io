let triviabtn = document.querySelector("#js-new-quote").addEventListener('click', newTrivia)

const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion"

let answerBtn = document.querySelector("#js-tweet").addEventListener('click', displayAnswer)

let current ={
    question: "",
    answer:"",

}

async function newTrivia(){
   // console.log("CLICK")

   try{
    const response = await fetch(endpoint);
    if(!response.ok){
        throw Error(response.statusText)
    }
    const json = await response.json();
    console.log(json);
    displayTrivia(json["question"]);
    current.question = json["question"];
    current.answer = json["answer"];
    console.log(current.question);
    console.log(current.answer);
   }
   catch (err){
    console.log(err)
    alert('failed to get new trivia');
   }
}

function displayTrivia(question){
    const questionTxt = document.querySelector("#js-quote-text");
    const answerTxt = document.querySelector("#js-answer-text");
    questionTxt.textContent = question;
    answerTxt.textContent = ""
    
}

function displayAnswer(){
    const answerTxt = document.querySelector("#js-answer-text");
    answerTxt.textContent = current.answer;
}
