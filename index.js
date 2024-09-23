const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

//importing the routes
const {userRouter} =  require('./routes/user')


const app = express();

app.use(express.json());

const connectionString = process.env.DATABASE_URL;

//connection function
async function connectToDB() {
  try {
    await mongoose.connect();
    console.log("Connected!");
  } catch (err) {
    console.error(err);
  }
}

app.use('/api/v1/user', userRouter)
app.use('/api/v1/user', userRouter)
app.use('/api/v1/user', userRouter)


async function main() {
  connectToDB();

  app.listen(3000, () => {
    console.log("listen to the port  3000");
  });
}
