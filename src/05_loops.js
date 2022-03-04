/**
 * @description This is a test to see how well you understand loops in javascript.
 * Write your solutions right below the comments. Use any tools you need to check the answers
 * Don't remove the comments, Ed needs to know what's going on.
 */

// This is sample data. Don't modify it. You will need to use it though:
const Elidon = Object.freeze({
  name: "Elidon", id: 1, hobbies: ["Memes", "Ed's haircut", "Visard's jokes"],
})
const Artiola = Object.freeze({
  name: "Artiola", id: 2, hobbies: ["Cats", "Chatting"],
})
const Marsel = Object.freeze({
  name: "Artiola", id: 3, hobbies: ["Basketball", "Being pretty tall"],
})
const Visard = Object.freeze({
  name: "Visard", id: 4, hobbies: ["Fishing", "Real estate", "Being very freaking tall"],
})
const Rinor = Object.freeze({
  name: "Rinor", id: 5, hobbies: ["Dogs", "Teaching", "Challenging himself"],
})

const data = Object.freeze({
  people: [Elidon, Artiola, Marsel, Visard, Rinor],
})

// 1. Print out the name of each person in the data object.

// 2. Count the toal number of hobbies

// 3. Create a mutable copy of Visard and change his name to "Visard of Oz"

// 4. Capitalise all hobbies in the data object

// 5. Create a new object called "peopleByName" and add all the people from the data object to it. It should look like this:
// peopleByName = {
//   Ed: { name: Ed, id: 6, hobbies: ["Drawing birds", "Shitposts", "Muay thai"] },
//   Nico: { name: Nico, id: 7, hobbies: ["Coding", "Learning Japanese", "Being pretty lit"] },
//   ...etc
// }
//
