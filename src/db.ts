//src/db.ts

import mongoose from "mongoose";

const connectToDB = async (DBurl: string) => {

  console.log(DBurl);

  try {

    await mongoose.connect(DBurl);
    console.log("Connected to MongoDB");

  } catch (error) {

    console.error("Error connecting to MongoDB:", error);

  }

};

export default connectToDB;
