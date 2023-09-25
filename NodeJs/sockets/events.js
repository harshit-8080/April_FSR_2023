const events = require("events");

const myEvents = new events();

myEvents.on("msg1", (data) => {
  console.log(data);
});

myEvents.emit("msg1", "this is message1");
myEvents.emit("msg1", "this is message2");
myEvents.emit("msg1", "this is message3");
myEvents.emit("msg1", "this is message4");
myEvents.emit("msg1", "this is message5");
