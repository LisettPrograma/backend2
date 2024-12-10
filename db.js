import {mongoose} from 'mongoose';
import {config} from 'dotenv';
config();

export async function connect() { 
    try {
        await mongoose.connect(process.env.URI)
        console.log('Conectado a MongoDB')
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

