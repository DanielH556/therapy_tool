// Importação de bibliotecas
import path from 'path';
import { DataSource } from 'typeorm';

// Configuração da Database e suas entidades
const AppDataSource = new DataSource({
   type: 'mysql',
   host: `localhost`,
   port: 3306,
   database: 'tcc',
   username: 'root',
   password: 'bl+;D9g4Vh4P+4',
   entities: [ path.join(__dirname, '..', 'models', '*.ts') ], // Diretório dos modelos
})

// Inicialização da Database
AppDataSource.initialize()
   .then(async () => {
      console.log('Data Source initialized');
   })
   .catch((err) => {
      console.error("Error during Data Source Initialization", err);
   })

export default AppDataSource