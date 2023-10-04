    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // we make a copy of it
    //let copyPlayers = Array.from(players);
    // let copyPlayers = [].concat(players);
    let copyPlayers = [...players];

    copyPlayers[2] = 'Stephen';

    console.log(players);
    console.log(copyPlayers);

    // The same thing goes for objects, let's say we have a person object

    // With Objects
    const person = {
      name: 'Caroline',
      age: 29
    };
    
    // Object.assign only work one level deep
    let copyPerson = Object.assign({}, person, { number: 99, age: 30 });

    console.log(person);
    console.log(copyPerson);