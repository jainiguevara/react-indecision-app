let nameVar = 'Jaini';
nameVar = 'Mela';
console.log('nameVar', nameVar);


let nameLet = 'Red';
nameLet = 'Jade'
console.log('nameLet',nameLet)

const nameConst = 'Juliana';
console.log('nameConst', nameConst);

const getPetName = () => {
    const petName = 'Hal';
    return 
};

const petName = getPetName();
console.log(petName);

//Block scoping

const fullName = 'Jaini Guevara';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);