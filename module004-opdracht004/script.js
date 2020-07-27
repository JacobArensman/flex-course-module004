
//-------------------------------------------------------------------------
const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"}, 
    {name: "Superman", alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"}]
    
    const findSpiderMan = superheroes.find((item) => {
        return item.name === "Batman"
    });
    
    console.log(findSpiderMan)
    // Find Spiderman
    // result should be: {name: "Spiderman", alter_ego: "Peter Parker"}



//-------------------------------------------------------------------------  


var numbers = [1, 2, 3];
var newarray = numbers.map(myFunction)

function myFunction(num) {
  return num * 2;
}

console.log(newarray)

//---------------------------------------------------------------------------------


const array = [1, 4, 3, 6, 9, 7, 11]

const containsNumberBiggerThan10 = array.includes(11);
console.log(containsNumberBiggerThan10)


//---------------------------------------------------------------------------------
const array = ['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']

const containsNumberBiggerThan10 = array.includes('Italy');
console.log(containsNumberBiggerThan10)


//------------------------------------------------------------------------------------
const array = [1, 4, 3, 6, 9, 7, 11]

var tenFold = array.map((element) => {
    return element * 10;
});

console.log(tenFold)
// result should be [10, 40, 30, 60, 90, 70, 110]

//-----------------------------------------------------------------------------------------

const array = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]

let isBelow100 = array.every((element) => {
    return element <= 10;
});


console.log(isBelow100)
// result should be: false


//-------------------------------------------------------------------------------------------


const array = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]

let bigSum = array.reduce((currentTotal, element) => {
    return element + currentTotal;
});


console.log(bigSum)



//----------------------------------------------------------------------------------------


