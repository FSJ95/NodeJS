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

    buildings.updateOne({
        type: "hej"
    }, {
        $set: {
            type: "mehehe"
        }
    }, (error, data) => {
        console.log(data.modifiedCount);
        client.close();

    });

});