// Activity 1: Understanding LocalStorage
// • Task 1: Write a script to save a string value to localStorage and retrieve it. Log the retrieved value.
const key = "greet";
const value = "hello";

// Save the string value to localStorage
localStorage.setItem(key, value);

// Retrieve the value from localStorage
const retrievedValue = localStorage.getItem(key);

// Log the retrieved value
console.log(retrievedValue); // Output: "hello"

// • Task 2: Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
const user = {
  name: "Harsh",
  age: 21,
};

localStorage.setItem("user", JSON.stringify(user));
const retrievedUser = JSON.parse(localStorage.getItem("user"));
console.log(retrievedUser);

// Activity 2: Using LocalStorage
// • Task 3: Create a simple form that saves user input (e.g., name and email) to localStorage when submitted. Retrieve and display the saved data on page load.

// Function to save user data to localStorage
function saveUserData(event) {
  event.preventDefault(); // Prevent form from submitting

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  const user = {
    name: name,
    email: email,
  };

  localStorage.setItem("user", JSON.stringify(user));

  displayUserData();
}

// Function to display user data from localStorage
function displayUserData() {
  const savedUser = JSON.parse(localStorage.getItem("user"));

  if (savedUser) {
    document.getElementById(
      "savedName"
    ).textContent = `Name: ${savedUser.name}`;
    document.getElementById(
      "savedEmail"
    ).textContent = `Email: ${savedUser.email}`;
  }
}

// Add event listener to the form
document.getElementById("userForm").addEventListener("submit", saveUserData);

// Display user data on page load
document.addEventListener("DOMContentLoaded", displayUserData);

// • Task 4: Write a script to remove an item from localStorage. Log the localStorage content before and after removal.

// Function to log all items in localStorage
function logLocalStorage() {
  console.log("Current localStorage content:");
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    console.log(`${key}: ${localStorage.getItem(key)}`);
  }
}

// Adding an item to localStorage for demonstration
localStorage.setItem("exampleKey", "exampleValue");

// Log localStorage content before removal
console.log("Before removal:");
logLocalStorage();

// Remove the item from localStorage
localStorage.removeItem("exampleKey");

// Log localStorage content after removal
console.log("After removal:");
logLocalStorage();

// Activity 3: Understanding SessionStorage
// • Task 5: Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved value.

const key_2 = "greet";
const value_2 = "hello";

// Save the string value to sessionStorage
sessionStorage.setItem(key, value);

// Retrieve the value from sessionStorage
const sessionValue = sessionStorage.getItem(key);

console.log(sessionValue);

// • Task 6: Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
const hero = {
  name: "Spiderman",
  age: 18,
};

sessionStorage.setItem("hero", JSON.stringify(hero));
const retrievedHero = JSON.parse(sessionStorage.getItem("hero"));
console.log(retrievedHero);

// Activity 4: Using SessionStorage
// • Task 7: Create a simple form that saves user input (e.g., name and email) to sessionStorage when submitted. Retrieve and display the saved data on page load.
// Function to save user data to sessionStorage
function saveSessionData(event) {
  event.preventDefault(); // Prevent form from submitting

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  const user = {
    name: name,
    email: email,
  };

  sessionStorage.setItem("user", JSON.stringify(user));

  displayUserData();
}

// Function to display user data from sessionStorage
function displaySessionData() {
  const savedUser = JSON.parse(sessionStorage.getItem("user"));

  if (savedUser) {
    document.getElementById(
      "sessionName"
    ).textContent = `Name: ${savedUser.name}`;
    document.getElementById(
      "sessionEmail"
    ).textContent = `Email: ${savedUser.email}`;
  }
}

// Add event listener to the form
document.getElementById("userForm").addEventListener("submit", saveSessionData);

// Display user data on page load
document.addEventListener("DOMContentLoaded", displaySessionData);

// • Task 8: Write a script to remove an item from sessionStorage. Log the sessionStorage content before and after removal.
function logSessionStorage() {
  console.log("Current session storage content:");
  for (let i = 0; i < sessionStorage.length; i++) {
    const key = sessionStorage.key(i);
    console.log(`${key}: ${sessionStorage.getItem(key)}`);
  }
}

// Adding an item to session storage for demonstration
sessionStorage.setItem("exampleKey", "exampleValue");

// Log session storage content before removal
console.log("Before removal:");
logSessionStorage();

// Remove the item from session storage
sessionStorage.removeItem("exampleKey");

// Log session storage content after removal
console.log("After removal:");
logSessionStorage();

// Activity 5: Comparing LocalStorage and SessionStorage
// • Task 9: Write a function that accepts a key and a value, and saves the value to both localStorage and sessionStorage. Retrieve and log the values from both storage mechanisms.

function saveToStorage(key, value) {
  // Save the value to localStorage
  localStorage.setItem(key, value);

  // Save the value to sessionStorage
  sessionStorage.setItem(key, value);

  // Retrieve and log the value from localStorage
  const localStorageValue = localStorage.getItem(key);
  console.log(`Value from localStorage: ${localStorageValue}`);

  // Retrieve and log the value from sessionStorage
  const sessionStorageValue = sessionStorage.getItem(key);
  console.log(`Value from sessionStorage: ${sessionStorageValue}`);
}

// Example usage
saveToStorage("saved", "saved to both storages");

// • Task 10: Write a function that clears all data from both localStorage and sessionStorage. Verify that both storages are empty.

function clearAllStorage() {
  // Clear all data from localStorage
  localStorage.clear();

  // Clear all data from sessionStorage
  sessionStorage.clear();

  // Verify and log localStorage content
  console.log("localStorage content after clearing:");
  if (localStorage.length === 0) {
    console.log("localStorage is empty");
  } else {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      console.log(`${key}: ${localStorage.getItem(key)}`);
    }
  }

  // Verify and log sessionStorage content
  console.log("sessionStorage content after clearing:");
  if (sessionStorage.length === 0) {
    console.log("sessionStorage is empty");
  } else {
    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);
      console.log(`${key}: ${sessionStorage.getItem(key)}`);
    }
  }
}

// Example usage
clearAllStorage();
