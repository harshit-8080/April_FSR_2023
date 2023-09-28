const app = require("../server");
const request = require("supertest");

describe("API Tests", () => {
  it("testing /api/greet", async () => {
    const response = await request(app).get("/api/greet");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Good Morning" });
  });
});

describe("Get all User API", () => {
  it("testing /api/users", async () => {
    const response = await request(app).get("/api/users");

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(4);
  });
});

describe("Get a user by Id", () => {
  it("testing /api/user/:userId", async () => {
    const response = await request(app).get("/api/users/2");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ id: 2, name: "Chandan" });
  });

  it("test /api/users/:userId should return 404", async () => {
    const response = await request(app).get("/api/users/999");

    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: "user not found" });
  });
});
