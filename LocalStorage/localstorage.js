//1) What is the difference between local storage and session storage?
//* The difference between sessionStorage and window.localStorage is that window.localStorage data does not expire,
//* whereas sessionStorage data is cleared when the page session ends.

//2) How many mb can I store in local storage?
//* It is limited to about  10MB and can contain only strings. window.LocalStorage is not accessible from web workers or service workers.

// 3) Is local storage asynchronous or synchronous?
//* It is synchronous

//4) Store 5 different values in local storage

window.localStorage.setItem("Student1", "Itzik");
window.localStorage.setItem("Student2", "Reut");
window.localStorage.setItem("Student3", "Yoni");
window.localStorage.setItem("Student4", "Kayed");
window.localStorage.setItem("Student5", "Hossam");
window.localStorage.setItem("Student6", "Rouge");

//5) Retrieve all 5 values from local storage

// window.localStorage.getItem("Student1");
// window.localStorage.getItem("Student2");
// window.localStorage.getItem("Student3");
// window.localStorage.getItem("Student4");
// window.localStorage.getItem("Student5");

for (let i = 0; i < window.localStorage.length; i++) {
  const key = window.localStorage.key(i);
  console.log(`${key}: ${window.localStorage.getItem(key)}`);
}

//6) Remove 2 values from local storage

window.localStorage.removeItem("Student1");
window.localStorage.removeItem("Student2");

//7) With a for loop retrieve all keys from window.localstorage
for (let i = 0; i < window.localStorage.length; i++) {
  const key = window.localStorage.key(i);
  console.log(`Key: ${key}`);
}

//8) Clear all local storage
window.localStorage.clear();

//9) Store an array and object in local storage
const blancos = ["Itzik", "Rouge", "Yoni", "Hossam", "Kayed", "Reut"];

window.localStorage.setItem("blancos", JSON.stringify(blancos));

//10)  Retrieve the array and object from localstorage

const reutIsAnnoying = JSON.parse(window.localStorage.getItem("blancos"));
console.log(reutIsAnnoying);

//! ------------------------------ Local Storage Methods --------------------------------
//? setItem() Method –
// This method takes two parameters one is key and another one is value. It is used to store the value in a particular location with the name of the key.
// window.localStorage.setItem(key, value)

//? getIteam() Method –
// This method takes one parameter that is key which is used to get the value stored with a particular key name
// window.localStorage.getItem(key)

//? removeItem() Method –
// This is method is used to remove the value stored in the memory in reference to key.
// window.localStorage.removeItem(key)

//? clear() Method –
// This method is used to clear all the values stored in window.localstorage.
// window.localStorage.clear()
