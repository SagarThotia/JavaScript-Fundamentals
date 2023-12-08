const accountId = 144553;
let accountEmail = "sagar@google.com";
var accountPassword = "12345";
accountCity = "Mumbai"; // This way of declaration is not right
let accountState;

// accountId = 2; // not allowed

accountEmail="S@@S.com";
accountPassword = 21245;
accountCity = "Dusseldorf";

console.log(accountId); 

/*
    Prefer not to use var
    because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

