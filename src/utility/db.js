import mongoose from "mongoose";


const Connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw new Error(error);
  }
};

export default Connect;
