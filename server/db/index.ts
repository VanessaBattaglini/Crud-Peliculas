import mongoose from "mongoose";
import { Nitro } from "nitropack";

export default async (_nitroApp: Nitro) => {
    
    const config = useRuntimeConfig();

    mongoose
        .connect(config.mongodbConection)
        .then(() => console.log('Connected to DB'))
        .catch((e) => console.log(e));
};