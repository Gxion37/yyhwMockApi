const { faker } = require("@faker-js/faker");

//For references, pls visit https://fakerjs.dev/guide/ for sample
function generateTopSeller(number) {
    const chart = [];
    while (number > 0) {
        chart.push(
            {
                topSellerBook: faker.datatype.number({ max: 100 }), //since we only have 100 books
                id: number
            }
        );
        number--;
    }
    return chart;
}

module.exports = generateTopSeller;