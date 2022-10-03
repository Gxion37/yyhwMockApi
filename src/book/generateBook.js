//import faker from "@faker-js/faker";
const { faker } = require("@faker-js/faker");

//For references, pls visit https://fakerjs.dev/guide/ for sample
function generateBookData(number) {
    const books = [];
    let num = 1;
    while (number >= num) {
        books.push({
            id: num,
            restockAt: faker.date.recent(),
            name: faker.music.songName(),
            price: faker.commerce.price(),
            description: faker.commerce.productDescription(),
            bookCover: faker.image.abstract(640, 480, true),
            likes: faker.datatype.number(),
            genre: faker.datatype.number({ min: 1, max: 15 }),
            createdAt: faker.date.past()
        });
        num++;
    }

    return books;
};

module.exports = generateBookData;
