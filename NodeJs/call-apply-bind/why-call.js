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

rohitData.print.call(viratData, "hdoushodf"); //function borrowing
rohitData.print.call(gillData, "hdkuhdka"); //function borrowing

/* 

Name -  Rohit Sharma  Country -  india
Name -  Virat Kohli  Country -  india
Name -  Subham Gill  Country -  india

*/
