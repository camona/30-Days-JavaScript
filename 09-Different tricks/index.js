const dogs = [{ name: 'Snickers', age: 2 }, { name: 'Hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Styled
console.log('%cI am some great text', 'font-size:50px; background:green;');

console.log(' ');

// Info
console.info("This is info.")

console.log(' ');

// Testing
console.assert(1 === 2, 'That is wrong!')

console.log(' ');

// Clearing
//console.clear();

// Viewing DOM Elements
const p = document.querySelector('p');
console.log('Console.dir on next line:')
console.dir(p);

console.log(' ');

// Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
})

console.log(' ');

// Counting
console.log('Counting words:');
console.count('Caroline');

// Timing
console.time('Fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json()) // storing and transporting data
    .then(data => {
        console.timeEnd('Fetching data')
        console.log(data)
});

console.log(' ');

// Table
console.table(dogs);