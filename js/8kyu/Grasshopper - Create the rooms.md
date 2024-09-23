# Codewars JavaScript Solutions

## Grasshopper - Create the rooms

### Escape the room

You are creating an "Escape the room" game. The first step is to create a hash table called rooms that contains all of the rooms of the game. There should be at least 3 rooms inside it, each being a hash table with at least three properties (e.g. `name`, `description`, `completed`).

### Solution 1

```
// Add rooms here
var rooms = {
  room1: {
    name: "room1",
    desciption: "room1",
    completed: false,
  },
  room2: {
    name: "room2",
    desciption: "room2",
    completed: false,
  },
  room3: {
    name: "room3",
    desciption: "room3",
    completed: false,
  },
}
```

### Solution 2

```
class Room  {
  constructor() {
    this.name = '';
    this.description = '';
    this.completed= '';
  }
}
const rooms = {
  bedroom : new Room(),
  kitchen : new Room(),
  bathroom : new Room(),
}
```
