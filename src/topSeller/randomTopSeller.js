const { faker } = require("@faker-js/faker");

//For references, pls visit https://fakerjs.dev/guide/ for sample
function generateTopSeller(number) {
    const chart = [];
    let num = 1;
    while (number >= num) {
        chart.push(
            {
                topSellerBook: faker.datatype.number({ max: 100 }), //since we only have 100 books
                id: num
            }
        );
        num++;
    }
    return chart;
}

module.exports = generateTopSeller;