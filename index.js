// fetch = Function used for making http requests to fetch resources
// (JSON style data, images, etc.) from a server.
// Simplfies async/await functionality
// used for interacting with apis to retrieve data and send data
// fetch(url, {options})

fetchData()

async function fetchData() {
  try {
    const pokemonName = document
      .getElementById('pokemonName')
      .value.toLowerCase()

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    )

    if (!response.ok) {
      throw new Error('Could not fetch data')
    }
    const data = await response.json()
    const pokemonSprite = data.sprites.front_default
    const imgElement = document.getElementById('pokemonsprite')

    imgElement.src = pokemonSprite
    imgElement.style.display = 'block'
  } 
  catch (error) {
    console.error(error)
  }
}
