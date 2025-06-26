const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = require("./app");

// DB
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log("'DB connection successfull.'"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App is started at port ${PORT}...`);
});
