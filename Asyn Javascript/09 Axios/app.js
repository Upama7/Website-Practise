


// axios.get("https://swapi.dev/api/people/1/").then ((res) => {
//     console.log("RESOLVED:", res)
// })
// .catch ((e) => {
//     console.log("ERROR!", e)
// })



// let use async promise now

// const getStarsWarsPerson = async (id) => {
//  try {
//     const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//     console.log(res.data);
//  } catch (e) {
//     console.log("ERROR!!", e)
//  }
// }

// getStarsWarsPerson(5);
// getStarsWarsPerson(50);





const jokes = document.querySelector('#jokes')
const button = document.querySelector('button');



const addNewJoke = async () => {
   const jokeText = await getDadJoke();
   console.log(jokeText)
   const newLI = document.createElement('LI');
   newLI.append(jokeText);
   jokes.append(newLI);
}


const getDadJoke = async () => {
   try {
      const config = { headers :{ Accept: 'application/json'}}
      const res = await axios.get('https://icanhazdadjoke.com/', config);
      return res.data.joke;
   } catch(e) {
      console.log("ERROR NO JOKES AVAILABLE :(")
   }
}

button.addEventListener('click', addNewJoke)