import mongoose from "mongoose";

export default async function connectDB () {
    if ( mongoose.connection.readyState ){ return }

    await mongoose.connect( process.env.MONGO_URI )
    console.log( "Connected to DB" );

}