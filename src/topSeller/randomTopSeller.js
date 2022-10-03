const { faker } = require("@faker-js/faker");

//For references, pls visit https://fakerjs.dev/guide/ for sample
function generateTopSeller(number) {
    const chart = [];
    let num = 1;
    while (number >= num) {
        chart.push(
            {
                id: num,
                booksId: faker.datatype.number({ min: 1, max: 100 })//since we only have 100 books
            }
        );
        num++;
    }
    return chart;
}

module.exports = generateTopSeller;