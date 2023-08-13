// You are developing a booking appli-ation for a -inema+ The ti-ket pri-e depends on the type of the
// viewer("Child", "adult", or "senior")+ Write a program whi-h -al-ulates the pri-e a--ordingly and prints the total
// price to be paid+ Let’s assume the ti-ket pri-e for a -hild is Rs+ 100, adult ti-ket pri-e is Rs+ 150 and ticket price
// for a senior is Rs+ 120+

let numberOfChilds = 2;
let numberOfAdults = 1;
let numberOfSeniors = 1;

let childTicketPrice = 100;
let adultTicketPrice = 150;
let seniorTicketPrice = 120;

let totalPrice =
numberOfChilds * childTicketPrice +
numberOfAdults * adultTicketPrice +
numberOfSeniors * seniorTicketPrice;

console.log(`The total ticket price is ${totalPrice}`);