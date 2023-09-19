const jokeText = document.querySelector('p');
const btn = document.querySelector('button');
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

const getJoke = () => {
  jokeText.classList.remove('fade');
  fetch(url)
    .then(res => res.json())
    .then(data => {
      jokeText.textContent = `${data.joke}`
      jokeText.classList.add('fade')
    })
}

btn.addEventListener('click', ()=> {
  getJoke()
})