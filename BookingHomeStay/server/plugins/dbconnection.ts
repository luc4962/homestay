import mongoose from "mongoose";

export default async()=>{
    const config = useRuntimeConfig()
    try{
        const DB_OPTIONS = {
            dbName: config.dbName,
            user: config.dbUser,
            pass: config.dbPass,
            authSource: config.dbAuthSource
        }
        await mongoose.connect(config.dbUrl, DB_OPTIONS)
        console.log("Connected to database")
    }catch(err){
        console.log(err)
    }
}