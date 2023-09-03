const m1 = new Map();

m1.set("name", "Harshit");
m1.set("age", 40);
m1.set("country", "India");

console.log(m1);
console.log(m1.get("name"));

console.log(m1.has("country"));
console.log(m1.has("city"));

m1.delete("age");
console.log(m1);

console.log(m1.size);

for (const arr of m1) {
  console.log(arr[0], arr[1]);
}

m1.clear();
console.log(m1);

console.log(m1.entries());
console.log(m1.keys());
console.log(m1.values());

for (const entry of m1.entries()) {
  console.log(entry);
}


