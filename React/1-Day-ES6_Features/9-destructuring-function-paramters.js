const person = {
  firstName: "Suraj",
  lastName: "Mishra",
  college: "ABC",
  salary: "1000",
  country: "US",
};

function f1({ firstName, lastName, country = "India" }, age, job = "dev") {
  console.log(firstName);
  console.log(lastName);
  console.log(country); // US or India
  console.log(country);
  console.log(age);

  console.log(job);
}

f1(person, 20, "tester", "Moni");
