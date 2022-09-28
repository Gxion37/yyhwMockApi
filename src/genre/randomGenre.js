//import faker from "@faker-js/faker";
const { faker } = require("@faker-js/faker");

//For references, pls visit https://fakerjs.dev/guide/ for sample
function generateGenreData(number) {
  const genres = [];
  while (number > 0) {
    genres.push({
      id: number,
      name: faker.music.genre(),
    });
    number--;
  }

  return genres; //without curly braces, this will only generate array
}

module.exports = generateGenreData;
