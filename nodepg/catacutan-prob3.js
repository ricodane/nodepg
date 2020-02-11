
const { Pool } = require('pg')
require ('dotenv').config()

 const pool = new Pool({
 user: `${process.env.DB_USER}`,
 host: `${process.env.DB_HOST}`,
 database: `${process.env.DB_DATABASE}`,
 password: `${process.env.DB_PASSWORD}`,
 port: process.env.DB_PORT,
 ssl: true,
 })

pool.query(`SELECT name, gender, pet_name, family, class
from "catacutan_pets".pets
INNER JOIN "catacutan_pets".owners
ON pets.owner_id = "catacutan_pets".owners.owner_id
WHERE gender = 'Female' OR class = 'Reptile'`
,(error, results)=>{
        if(error){
            throw error
        }
        console.log(results.rows);
        
    })





