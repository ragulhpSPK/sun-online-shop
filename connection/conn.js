import mongoose from "mongoose";
const MONGODB_URL = process.env.MONGODB_URL;

if (!MONGODB_URL) {
  throw new Error("please defined a Valid Url");
}

let catched = global.mongoose;

if (!catched) {
  catched = global.mongoose = { conn: null, promise: null };
}

async function dbconnect() {
  if (catched) {
    return catched.conn;
  }

  if (!catched) {
    const opts = {
      buffercommands: false,
    };

    catched.promise = mongoose.connect(MONGODB_URL, opts).then((mongoose) => {
      return mongoose;
    });
  }
  catched.conn = await catched.promise;
  return catched.conn;
}

export default dbconnect();
