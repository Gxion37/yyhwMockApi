const command01 = '${host}/{dbname}?{subitemName}={valueToFind}'; //filtering by using value
const command02 = '${host}/{dbname}?_sort={subitemName}&_order={asc or desc}'; //sorting 
const command03 = '${host}/{dbname}?_page={pageNumber}&_limit={numberOfItemForOnePage}'; //pagination
const command04 = '${host}/{dbname}?{subitemName}_gte={number}&price_lte={number}';
//{subitemName}_gte=      greater than or equal to,
//{subitemName}_lte=      lesser than or equal to ,
//{subitemName}_ne=       not equal to,
//{subitemName}_like=^    sql like '' function
//q=                      full string search
const command05 = '${host}/{dbname}?_embed={otherDbname}';  //embed data from other {otherDbname}table that contain id of {dbname} in their subitem 
const command06 = '${host}/{dbname}?_expand={otherDbname}'; //expand data from {dbname} subitems that consist id of (otherDbname) -- left join

const desc01 = "{subitemName}_gte: greater than or equal to,\n{subitemName}_lte: lesser than or equal to,\n{subitemName}_ne: not equal to,\n{subitemName}_like=^: sql like  function,\nq=: full string search";


const desc02 = 'embed data from other {otherDbname}table that contain id of {dbname} in their subitem ';
const desc03 = 'expand data from {dbname} subitems that consist id of (otherDbname) -- left join';
console.log([{
    'filtering': command01,
    'sorting': command02,
    'pagination': command03,
    'operator': { 'command': command04, 'hint': desc01 },
    'embed': { 'command': command05, 'hint': desc02 },
    'expand': { 'command': command06, 'hint': desc03 }
}]);