import { createConnection } from 'typeorm'


//função que passa um objeto com todas as configuraçoes do ORM
createConnection().then(()=> console.log(' 🔥 Successfully connected with database')).catch(error => console.log(error));