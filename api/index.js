const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users");
const vedioRoute = require("./routes/vedios");
const pageRoute = require("./routes/pages");
const path = require("path");


dotenv.config(); 
app.use(express.json());
mongoose.connect(process.env.MONG_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

  }).then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

  app.use("/api/pages", pageRoute); 
  app.use("/api/auth", authRoute); 
  app.use("/api/users", userRoute);
  app.use("/api/vedios", vedioRoute);

app.listen("5001", () => {
  console.log("listening on backend");
});
