//import faker from "@faker-js/faker";
const { faker } = require("@faker-js/faker");

//For references, pls visit https://fakerjs.dev/guide/ for sample
function generateGenreData(number) {
  const genres = [];
  let num = 1;
  while (number >= num) {
    let genre = faker.helpers.unique(faker.music.genre)
    genres.push({
      id: num,
      name: genre,
    });
    num++;
  }

  return genres; //without curly braces, this will only generate array
}

module.exports = generateGenreData;
