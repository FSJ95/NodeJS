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

    buildings.deleteOne({
        type: Date('2020-04-16T10:50:08.744Z')
    }, (error, succes) => {
        console.log(succes.deletedCount);
        client.close();
    });

});