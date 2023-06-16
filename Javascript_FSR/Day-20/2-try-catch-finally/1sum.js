function sum(a, b) {
  try {
    if (typeof a == "number" && typeof b === "number") {
      console.log(a + b);
    } else {
      throw new Error("Please give me number only");
    }

    console.log("line 999999");
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("jjokjdhsuhdgjsgd");
  }
}

sum(10, 30);
