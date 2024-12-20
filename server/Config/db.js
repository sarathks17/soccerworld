import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://soccerworld:soccerworld123@cluster0.yuycj.mongodb.net/soccer-world').then(()=> console.log("Database connected"));

}