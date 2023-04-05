// Importação de bibliotecas
import path from 'path';
import { DataSource } from 'typeorm';

// Configuração da Database e suas entidades
const AppDataSource = new DataSource({
   type: 'sqlite',
   database: './db.sqlite',
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