import { DataSource } from 'typeorm';

const connection = new DataSource({
   // name: "firstconnection",
   // type: "mysql",
   // host: "localhost",
   // port: 3000,
   // username: "root",
   // password: "root",
   // database: "firstDB"
   type: 'mysql',
   url: 'http://192.168.56.1',
   synchronize: true,
   port: 3000
})

connection.initialize()
   .then(() => {
      console.log('Data Source Initialized');
   })
   .catch((err) => {
      console.error('Data Source initialization error', err);
   })

export default connection