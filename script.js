const joke_button = document.getElementById("joke-button");
const joke_container = document.getElementById("joke-box");

const url = "https://v2.jokeapi.dev/joke/Dark,Pun?blacklistFlags=religious,political&type=single";

let getJokes = () => {

    fetch(url)
    .then(response => response.json())
    .then(data =>{
        joke_container.textContent = data.joke;
    })
   
}

joke_button.addEventListener('click',getJokes);
