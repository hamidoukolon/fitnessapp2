const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();
const databaseName = "workout"

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/" + databaseName, {
  useUnifiedTopology: true,
  useFindAndModify: false,
  useNewUrlParser: true
}).then(() => console.log(`successfulley conected: ${databaseName}1`))

// routes
app.use(require("./routes"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
