# browserdb

## Table of Contents

- [Initialize](#initialize)
- [post](#post)
- [all](#all)
- [get](#get)
- [remove](#remove)
- [replaceAll](#replaceAll)
- [removeAll](#removeAll)
- [destroy](#destroy)

## Initialize

To initialize a new table, you have to create a new instance of browserdb.

### Local Storage

```js
var users = new browserdb("users");
```

Create a new empty table named ``users`` if the table doesn't exist or get content if exists.

### Session Storage

```js
var users = new browserdb("users", true)
```

Create a new empty table named ``users`` during a session.

## post

Method ``post()`` adds a new entry in the table.

```js
var users = new browserdb("users");

var bob = {
  name: "Bob",
  sex : "Male"
};

var suzy = {
  name: "Suzy",
  sex : "Female"
}

users.post(bob);
users.post(suzy);
```

## all

Method ``all()`` permits to get all entries in the table.

```js
var users = new browserdb("users");

console.log(users.all());
// [{name: "Bob", sex: "Male"}, {name: "suzy", sex: "Female"}]
```

## get

Method ``get()`` returns the first entry in the table or ``get(n)`` returns the n-th entry in the table.

```js
var users = new browserdb("users");

console.log(users.get());
// {name: "Bob", sex: "Male"}

console.log(users.get(0));
// {name: "Bob", sex: "Male"}

console.log(users.get(1));
// {name: "Suzy", sex: "Female"}
```

## remove

Method ``remove()`` removes the n-th entry in the table.

```js
var users = new browserdb("users");

user.all();
// [{name: "Bob", sex: "Male"}, {name: "suzy", sex: "Female"}]

users.remove(1);
users.all();
// [{name: "Bob", sex: "Male"}]
```

## replaceAll

Method ``replaceAll(value)`` replaces all the table.

```js
var users = new browserdb("users");

console.log(users.all());
// [{name: "Bob", sex: "Male"}, {name: "suzy", sex: "Female"}]

users.replaceAll([
  {name: "Alex", sex: "Male"},
  {name: "Mark", sex: "Male"}
]);

console.log(users.all());
// [{name: "Alex", sex: "Male"}, {name: "Mark", sex: "Male"}]
```

## removeAll

Method ``removeAll()`` deletes all entries in the table.

```js
var users = new browserdb("users");

console.log(users.all());
// [{name: "Alex", sex: "Male"}, {name: "Mark", sex: "Male"}]

users.removeAll();

console.log(users.all());
// []
```

## destroy

Method ``destroy()`` deletes the table.

```js
var users = new browserdb("users");

console.log(users.all());
// [{name: "Alex", sex: "Male"}, {name: "Mark", sex: "Male"}]

users.destroy();

console.log(users.all());
// null
```
