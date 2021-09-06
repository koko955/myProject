function concatenateDAta (input){
let firstName = input[0];
let LastName = input[1];
let age = Number (input[2]);
let town = input [3];

console.log(`You are ${firstName} ${LastName} , a ${age} - years old from ${town}.`);
}
concatenateDAta(["Kostadin", "Atanasov" , "25","Katunica"]);