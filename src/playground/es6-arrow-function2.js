// arguments object - no longer bound with arrow functions

const add = function (a, b) {
    console.log(arguments);
    return a + b;
};

console.log(add(1,3, 1000));

const addArrow = (a, b) => {
    //console.log(arguments);
    return a + b;
};

console.log(addArrow(2,5));

// this keyword  - no longer bound

const user = {
    name: 'Jaini',
    cities: ['Manila', 'Las Pinas'],
    printPlaceLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlaceLived());

const multiplier = {
    numbers: [1, 2, 3, 4],
    multiplyBy: 59,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());