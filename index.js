const axios = require("axios");

//DO NOT TOUCH CODE BELOW
const pokemonArray = [];
const rand1 = Math.ceil(Math.random() * 151);
const rand2 = Math.ceil(Math.random() * 151);
const rand3 = Math.ceil(Math.random() * 151);
//DO NOT TOUCH CODE ABOVE

//Below is a function containing asynchronous, promise-based axios requests that are requesting three random pokemon and adding them to our pokemonArray variable.
// function getPokemon() {
//   axios
//     .get(`https://pokeapi.co/api/v2/pokemon/${rand1}`)
//     .then(res => pokemonArray.push(res.data))
//     .catch(err => console.log(err));
//   axios
//     .get(`https://pokeapi.co/api/v2/pokemon/${rand2}`)
//     .then(res => pokemonArray.push(res.data))
//     .catch(err => console.log(err));
//   axios
//     .get(`https://pokeapi.co/api/v2/pokemon/${rand3}`)
//     .then(res => pokemonArray.push(res.data))
//     .catch(err => console.log(err));
// }

// STEP 1:
// Without accounting for error handling, convert the above .then()s into async/await syntax below
  
//const getPokemon = async () => {}
// async function getPokemon(){
//       let pokemon1 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${rand1}`)
//       let pokemon2 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${rand2}`)
//       let pokemon3 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${rand3}`)
// }

// STEP 2:
// Now use a try/catch block to account for error handling for the code above.
// Then, implement the following console.log( ) in a finally block to check your pokemonArray length: 
// console.log(`we have ${pokemonArray.length} Pokemon in our pokemonArray`)

//try catch block works the pending fulfilled rejected states
//catch: this is just catch
//catch{}: this is the catch block

async function getPokemon(){
  try {
    let pokemon1 = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${rand1}`)
    let pokemon2 = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${rand2}`)
    let pokemon3 = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${rand3}`)

    pokemonArray = [pokemon1, pokemon2, pokemon3]
  }
  catch(err){
    console.log(err)
  }
  finally {
    console.log(`we have ${pokemonArray.length} Pokemon in our pokemonArray`)
  }
}

//finally runs regardless of the status

//DO NOT TOUCH THE CODE BELOW:
getPokemon();
