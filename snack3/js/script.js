const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

const min = 5;

const max = 10;


// const newArray = []

// myArray.forEach((element, index, array) => {
//     if (index > min && index < max) { 
//         newArray.push(element)
//     }
// });
// console.log(newArray)


const newArray = myArray.filter((item, index, array) => {

    const thisItems = index >= min && index <= max;

    return thisItems;  

});
console.log(newArray)
