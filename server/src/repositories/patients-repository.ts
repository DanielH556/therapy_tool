import Patient from "models/patient";
import database from "./database";

const patientsRepository = {
   criar: (patient: Patient, callback: (id?: number) => void) => {
      const sql = 'INSERT INTO pacientes (nome, cpf, senha) VALUES (?,?,?)';
      const params = [patient.nome, patient.cpf, patient.senha];
      database.run(sql, params, function(_err) {
         callback(this?.lastID);
      });
   },

   lerTodos: (callback: (patients: Patient[]) => void) => {
      const sql = 'SELECT * FROM pacientes';
      const params: any[] = [];
      database.all(sql, params, (_err, rows) => callback(rows));
   },

   ler: (id: number, callback: (patient?: Patient) => void) => {
      const sql = 'SELECT * FROM pacientes WHERE id = ?';
      const params = [id];
      database.get(sql, params, (_err, row) => callback(row));
   },

   atualizar: (id: number, patient: Patient, callback: (notFound: boolean) => void) => {
      const sql = 'UPDATE pacientes SET nome = ?, cpf = ? WHERE id = ?';
      const params = [patient.nome, patient.cpf, id];
      database.run(sql, params, function(_err) {
         callback(this.changes === 0);
      })
   },

   apagar: (id: number, callback: (notFound: boolean) => void) => {
      const sql = 'DELETE FROM pacientes WHERE id = ?';
      const params = [id];
      database.run(sql, params, function(_err) {
         callback(this.changes === 0);
      })
   }
};

export default patientsRepository;