//import faker from "@faker-js/faker";
const { faker } = require("@faker-js/faker");

//For references, pls visit https://fakerjs.dev/guide/ for sample
function generateBookData(number) {
    const books = [];
    while (number > 0) {
        books.push({
            id: number,
            restockAt: faker.date.recent(),
            name: faker.music.songName(),
            price: faker.commerce.price(),
            description: faker.commerce.productDescription(),
            bookCover: faker.image.abstract(640, 480, true),
            likes: faker.datatype.number(),
            genre: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
            createdAt: faker.date.past()
        });
        number--;
    }

    return books;
};

module.exports = generateBookData;
