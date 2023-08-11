const Events = require("events");

const myEvents = new Events();

// consuming events ===>
myEvents.on("morning", (eventMessage) => {
  console.log(eventMessage);
});

myEvents.on("afternoon", (eventMessage) => {
  console.log(eventMessage);
});

// creating events ===> Emiting Events
myEvents.emit("morning", "Good Morning Guys");
myEvents.emit("morning", "Harshit raj GM");

myEvents.emit("afternoon", "Hey Good Aftenoon");
