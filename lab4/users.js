// We use in memory database for this lab, so we will store the users in an array
let users = [
    { id: 1, name: "Abhay Pratap Singh",mob:"1234567890", email: "abhaychauhan6111@gmail.com" },
    { id: 2, name: "John Doe", mob:"9876543210", email: "johndoe@example.com" }
];

let nextId = 3; // Next ID to be assigned to a new user

export const getUsers = () => users;