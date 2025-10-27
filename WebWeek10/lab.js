// safe element selection and event wiring
const triviaBtnEl = document.querySelector("#js-new-quote");
if (triviaBtnEl) triviaBtnEl.addEventListener('click', newTrivia);

const endpoint ="https://pokeapi.co/api/v2/pokemon/"


const answerBtnEl = document.querySelector("#js-tweet");
if (answerBtnEl) answerBtnEl.addEventListener('click', displayAnswer);

let current ={
    pokemon: "",
    answer:"",

}

async function newTrivia(){
   // console.log("CLICK")

   try{
    //make random ID for pokemon
    const id = Math.floor(Math.random() * 1025) + 1;
    //fetch that pokemon
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if(!response.ok){
        throw Error(response.statusText)
    }
    const json = await response.json();
    console.log(json);

    //capitalize
    const name = json.name.charAt(0).toUpperCase() + json.name.slice(1);

    //display pokemon name
    current.pokemon = name;

    //display pokemon sprite
    const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    displayTrivia(name, sprite);

   }
   catch (err){
    console.log(err)
    alert('failed to get new pokemon');
   }
}

function displayTrivia(pokemon, sprite){
    const pokemonTxt = document.querySelector("#js-quote-text");
    if (pokemonTxt) pokemonTxt.textContent = pokemon;

    const spriteImg = document.querySelector("#pokemon-sprite");
    if(spriteImg) spriteImg.src = sprite;
}

function displayAnswer(){
    const answerTxt = document.querySelector("#js-answer-text");
    answerTxt.textContent = current.answer;
}

// load a trivia pokemon when the page opens
// window.addEventListener('DOMContentLoaded', () => {
//     newTrivia();
// });
