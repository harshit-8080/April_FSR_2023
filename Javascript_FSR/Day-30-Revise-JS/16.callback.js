function goToSchool(callback) {
  console.log("Going to School");

  setTimeout(() => {
    console.log("Reached to School");
    callback();
  }, 2000);
}

function takeLunch(callback) {
  console.log("Studying in School");

  setTimeout(() => {
    console.log("Taking my Lunch");
    console.log("Lunch Completed");
    callback();
  }, 2000);
}

function returnFromSchool(callback) {
  console.log("Returning from School");

  setTimeout(() => {
    console.log("Reached at home");
    callback();
  }, 3000);
}

function goingToCoaching(callback) {
  console.log("Going to Coaching");

  setTimeout(() => {
    console.log("Reached to Coaching");
    callback();
  }, 1000);
}

function comeToHome() {
  console.log("Returning to Home from Coaching");

  setTimeout(() => {
    console.log("Reached to HOME And Now Sleeping");
  }, 2000);
}

goToSchool(function () {
  takeLunch(function () {
    returnFromSchool(function () {
      goingToCoaching(function () {
        comeToHome();
      }); // FIX This Code
    });
  });
});
