const { Client } = require('pg')

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: "ecommerce",
    password: '123456',
    port: 5432
});

client.connect();

exports.client = client;