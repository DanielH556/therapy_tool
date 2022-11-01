import Patient from '../models/patient';
import patientView from '../views/patientView';
import database from '../repositories/database';
import { DataSource } from 'typeorm';
import AppDataSource from '../config/dataSource';

export default{
   async index() {
      console.log('acquiring patientRepo')
      const patientRepo = await AppDataSource.getRepository(Patient)
      console.log('patientRepo acquired')
      // const patients = await patientRepo.createQueryBuilder()
      //                   .select()
      //                   .from(Patient, "patients")
      //                   .getMany()
      const patients = await patientRepo.find()
      console.log('patients acquired')
      // const patients = await AppDataSource.manager.find(Patient)
      console.log(patients)
   }

   // async show(req: Request, res: Response) {
   //    const { id } = req.params;
   //    const patientRepo = getRepository(Patient)
   // },

   // async create(req: Request, res: Response) {
   //    const {  } = req.body;
   //    const patientRepo = getRepository(Patient);

   // }
}

// const patientController = {
//    create: (patient: Patient, callback: (id?: number) => void) => {
//       const query = 'INSERT INTO pacientes (idPaciente, nomePaciente, sobrenome, cpf, email, senha, data_nasc, idProf, telefone, cep) VALUES (?,?,?,?,?,?,?,?,?,?)';
//       const params = [patient.idPaciente, patient.nomePaciente, patient.sobrenome, patient.cpf, patient.email, patient.senha, patient.data_nasc, patient.idProf, patient.telefone, patient.cep];

//       database.run(query, params, function(_err) {
//          callback(this?.lastID)
//       })
//    },

//    select: (id: number, callback: (patient?: Patient) => void) => {
//       const query = 'SELECT * FROM pacientes WHERE id = ?';
//       const params = [id];
      
//       database.get(query, params, (_err, row) => callback(row))
//    },

//    selectAll: (callback: (patient: Patient[]) => void) => {
//       const query = 'SELECT * FROM pacientes';
//       const params: any[] = [];

//       database.all(query, params);
//    }
// }

// export default patientController