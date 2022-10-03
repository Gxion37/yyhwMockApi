const generateBookData = require("./src/book/generateBook");
const generateGenre = require("./src/genre/randomGenre");
const fs = require("fs");
const generateTopSeller = require("./src/topSeller/randomTopSeller");
const generateUserData = require("./src/user/generateUser");

//to get started pls use "npm install" to download all required package
//To yongying - i generated these data and put them into the api web i gave you on that night
//For references, pls visit https://fakerjs.dev/guide/ for sample

// for REST link, pls visit https://jsonplaceholder.typicode.com/guide/ for references
const GENRES = generateGenre(5);
const BOOKS = generateBookData(100);
const TOPSELLERCHART = generateTopSeller(10);
const USERSLIST = generateUserData(200);
fs.writeFileSync(   //create a mock database
    "./db.json",
    JSON.stringify({ genres: GENRES, books: BOOKS, topSeller: TOPSELLERCHART, users: USERSLIST })
);

console.log("yeah");