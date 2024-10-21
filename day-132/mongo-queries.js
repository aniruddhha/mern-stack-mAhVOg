const { MongoClient } = require('mongodb')

const uri ="mongodb://localhost:27017/";

const client = new MongoClient(uri)

async function run() {
    try {
        await client.connect()
        console.log(`Connected to Mongo Successfully`)
        const db = client.db('classroom')
        const collection = db.collection('students')

        const cursor = collection.find({})
        const results = await cursor.map( dc => dc )
        console.log(results)
    } finally {
        await client.close()
    }
}
run().catch(e => console.log(e))

