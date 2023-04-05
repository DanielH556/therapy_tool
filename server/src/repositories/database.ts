// Importação de bibliotecas
import * as sqlite3 from 'sqlite3';

// Definição de tipo de database
const DBSOURCE = 'db.sqlite';

// Query de criação da tabela Pacientes
const SQL_PATIENT_CREATE = `
   CREATE TABLE pacientes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome VARCHAR,
      cpf VARCHAR,
      senha VARCHAR
   )`;

// Criação do Database "Pacientes"
const database = new sqlite3.Database(DBSOURCE, (err) => {
   if (err) {
      console.error(err.message);
      throw err;
   } else {
      console.log('Base de dados conectada com sucesso');
      database.run(SQL_PATIENT_CREATE, (err) => {
         if (err) {
            console.error(err.message);
            throw err;
            // Possivelmente a tabela já foi criada
         } else {
            console.log('Tabela Pacientes criada com sucesso.')
         };
      });
   };
});

export default database;