

//Espacio de codigo patrocinado por chatgtp
function searchPokemon() {
    const pokemonName = document.getElementById('nombre').value.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('info').innerHTML = `
                <h2>${data.name}</h2>
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <p>ID: ${data.id}</p>
                <p>Altura: ${data.height}</p>
                <p>Peso: ${data.weight}</p>                 
                <p>Tipo: ${data.types.map(type => type.type.name).join(', ')}</p>
            `;
        })
        .catch(error => {
            document.getElementById('info').innerHTML = 'No se encontró el pokemon, por favor verifique los datos ingresados';
        });
}
//OpenAI. (2024). ChatGPT (versión GPT-4) [Asistente virtual]. OpenAI. https://www.openai.com/chat