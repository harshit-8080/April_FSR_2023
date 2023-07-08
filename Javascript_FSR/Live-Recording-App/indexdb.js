/*

    1. Open my indexDB
    2. Initialize my database
    3. Since we are using indexDB --> We will create Object Store

 */

let database;

let openRequest = indexedDB.open("liveRecordProject1");

openRequest.addEventListener("success", () => {
  console.log("database opened");

  database = openRequest.result;
});

openRequest.addEventListener("upgradeneeded", () => {
  console.log("database upgraded");

  database = openRequest.result;
  database.createObjectStore("video", { keyPath: "id" });
});

openRequest.addEventListener("error", () => {
  console.log("database opening error");
});
