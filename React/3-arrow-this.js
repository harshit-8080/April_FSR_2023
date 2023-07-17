const obj = {
  name: "Virat",
  greet: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  },
};

obj.greet();
