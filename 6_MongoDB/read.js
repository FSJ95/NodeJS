const mongoClient = require("mongodb").MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const dbName = "animalfarm";

mongoClient.connect(connectionURL, {
    useUnifiedTopology: true
}, (error, client) => {
    if (error) {
        throw "Error connecting to mongodb" + error;
    }

    const animalFarmDB = client.db(dbName);
    const buildings = animalFarmDB.collection("buildings");

    buildings.find({
        type: {
            $exists: true
        }
    }).toArray((error, foundBuildings) => {
        console.log(foundBuildings);
        client.close();
    });
});