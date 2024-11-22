const skills = ["pasha", "roma", "taras"];

skills.push("pidaru");

console.log(skills);

skills.pop();

console.log(skills);


const array = [1, 2, 4, 3, 5, 6, 7, 8, 9];

const sum = array.reduce((acc, value) => acc + value, 0);
console.log(sum);

const newArray = array.reduce((acc, value) => {
    if (value % 2 === 0) acc.push(value);
    return acc;
}, []);
console.log(newArray);