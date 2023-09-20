// ## Array Cardio Day 2

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
    ];

    const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
    ];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const isAdult = people.some(people => {
    const currentYear = (new Date()).getFullYear();
    return currentYear - people.year >= 19;
});

console.log('One person is 19 or older: ' + isAdult);

console.log('');

// Array.prototype.every() // is everyone 19 or older?
const allAdults = people.every(people => {
    const currentYear = (new Date()).getFullYear();
    return currentYear - people.year >= 19;
})

console.log('Every person is 19 or older: ' + allAdults);

console.log('');

// Array.prototype.find()
// find the comment with the ID of 823423
const comment = comments.find(comment => comment.id === 823423);

console.log('Returning the comment of ID 823423: ' + comment.text);

console.log('');
// Array.prototype.findIndex()
// Find the comment with this ID
const index = comments.findIndex(comment => comment.id === 823423);

console.log('The index of ID 823423: ' + index);

console.log('');

// delete the comment with the ID of 823423
console.log('Deleting the comment with the ID of 823423...');

// 1) Can either use the splice method:
// comments.splice(index, 1);

// 2) or the slice method with the spread operator:
const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index + 1)
];

console.table(newComments);