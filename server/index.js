const server = require("./src/server.cjs");
const { conn } = require("./src/db.cjs");

conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    console.log("Server listening at 3001");
  });
});
