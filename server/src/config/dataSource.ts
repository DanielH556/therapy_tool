import path from 'path';
import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
   type: 'sqlite',
   database: './db.sqlite',
   entities: [ path.join(__dirname, '..', 'models', '*.ts') ],
})

AppDataSource.initialize()
   .then(async () => {
      console.log('Data Source initialized');
   })
   .catch((err) => {
      console.error("Error during Data Source Initialization", err);
   })

export default AppDataSource