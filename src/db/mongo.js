import mongoose from "mongoose";

async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("connected to mongodb");
  } catch (error) {
    console.log(error);
  }
}

export default connect;
