const rohitData = {
  name: "Rohit Sharma",
  country: "india",
  print(x) {
    console.log("Name - ", this.name, " Country - ", this.country);
    console.log(x);
  },
};

rohitData.print();

const viratData = {
  name: "Virat Kohli",
  country: "india",
};
const gillData = {
  name: "Subham Gill",
  country: "india",
};

rohitData.print.apply(viratData, ["hdoushodf", "dhksd"]); //function borrowing
rohitData.print.apply(gillData, ["hdkuhdka", "hdjksh"]); //function borrowing

/* 
  
  Name -  Rohit Sharma  Country -  india
  Name -  Virat Kohli  Country -  india
  Name -  Subham Gill  Country -  india
  
  */
