var users = new browserdb("users");

console.log(users.all());

users.post({
  name: "Maxime",
  age : 22
});

console.log(users.all());
