const { faker } = require("@faker-js/faker");

function generateUserData(number) {
    const users = [];
    while (number > 0) {
        let gender = faker.name.sex();
        let firstName = faker.name.firstName(gender);
        let lastName = faker.name.lastName(gender);
        users.push({
            id: number,
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            birthday: faker.date.birthdate({ min: 18, max: 65, mode: 'age' }),
            phoneNumber: faker.phone.number('+601#-####-###'),
            favGenre: faker.helpers.arrayElements([1, 2, 3, 4, 5]),
            profilePic: faker.image.people(640, 480, true),
            email: faker.internet.email(firstName, lastName),
            accountName: faker.internet.userName(firstName, lastName),
            password: faker.internet.password(len = 15, memorable = true), //not a correct way to store password but this is a mockapi so...
        });
        number--;
    }

    return users;
};

module.exports = generateUserData;