const container = document.querySelector('#container');
baseURL = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'


for (let i = 100; i <= 200; i++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon')
    const span = document.createElement('span');
    span.innerText = `${i}`;
    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${[i]}.png`

    pokemon.appendChild(newImg);
    pokemon.appendChild(span);
    container.appendChild(pokemon);
}
