require('dotenv').config()
const connectDB = require('./db/connect')
const model = require('./models/productsSchema')
const dummyProducts = require('./products.json')

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        await model.deleteMany()
        await model.create(dummyProducts)
        console.log('SUCCESS')
        process.exit(0)

    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

start()