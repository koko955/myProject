function object(){

let person = {
name:"Koce",
age:26,
sex:'male',
friend:[{},{},{}]               //array of objects
};

person.age = 32;              // change "age"
person.habit = 'smoke'       //another way to create a new key and value
person['hobby'] = 'football' //create a new key and value(recommend)
delete person.habit;          //delete key and value 
person.hobby = null
let keyss = Object.keys(person)
let valuess = Object.values(person)
for (let el in person) {
    console.log(`${el} <=> ${person[el]}`)
}
    

}
object();