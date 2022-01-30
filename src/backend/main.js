const db = require('./dataAccessLayer/connection')

let dbconnection;

async function main(){
    dbconnection = await db.dbconnect();
    listDatabases(dbconnection);
}


async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

main();