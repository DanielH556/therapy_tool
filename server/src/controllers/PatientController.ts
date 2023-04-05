import { Request, Response } from 'express';
import Pacientes from '../models/patient';
import patientView from '../views/patientView';
import database from '../repositories/database';
import { DataSource } from 'typeorm';
import AppDataSource from '../config/dataSource';

export default{
   // Mostrar todos os pacientes
   async index(request: Request, response: Response) {
      const patient = await AppDataSource.manager.find(Pacientes)
      response.send(patient)
   },

   // Mostrar o paciente de acordo com o id no banco de dados
   async show(request: Request, response: Response) {
      const idPaciente = request.params.id;
      const patient = await AppDataSource.manager.find(Pacientes, { where: { id: +idPaciente, } });
      response.send(patient)
   },

   // async create(req: Request, res: Response) {
   //    const {  } = req.body;
   //    const patientRepo = getRepository(Patient);

   // }
}