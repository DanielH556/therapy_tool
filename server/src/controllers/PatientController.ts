import { Request, Response } from 'express';
import Paciente from '../models/patient';
import AppDataSource from '../config/dataSource';
import { createQueryBuilder } from 'typeorm';

export default{
   // Mostrar todos os pacientes
   async index(request: Request, response: Response) {
      console.log('Starting index patient')
      const paciente = await AppDataSource.manager.find(Paciente)
      console.log('Finishing index patient')
      response.send(paciente)
   },

   // Mostrar o paciente de acordo com o id no banco de dados
   async show(request: Request, response: Response) {
      const idpac = request.params.id;
      const paciente = await AppDataSource.manager.findOneBy(Paciente, {
         idpac: +idpac,
      })
      response.send(paciente)
   },

   async checkCred(request: Request, response: Response) {
      const cpfCred = request.params.cpf;
      const passwordCred = request.params.password;
      const prof = await AppDataSource.manager.findOne(Paciente, {
         where: {
            cpf: cpfCred,
            senha: passwordCred,
         }
      })
      response.send(prof)
   },

   // Criar uma nova Entry na tabela "paciente"
   async create(request: Request, response: Response) {
      const { nome, sobrenome, cpf, idprofissional, email, senha, datanascimento, telefone, cep } = request.body;
      const paciente = await AppDataSource.manager.insert(Paciente, { 
         nomepac: nome,
         sobrepac: sobrenome,
         cpf: cpf,
         idprof: idprofissional,
         email: email,
         senha: senha,
         nasc: datanascimento,
         tel: telefone,
         cep: cep
      });

      response.status(201).json({
         status: "success",
         data: {
            nomepac: nome,
            sobrepac: sobrenome,
            cpf: cpf,
            idprof: idprofissional,
            email: email,
            senha: senha,
            nasc: datanascimento,
            tel: telefone,
            cep: cep,
         }
      })
   },

   // Apagar um paciente da tabela no banco de dados
   async delete(request: Request, response: Response) {
      if (!request.params.id) {
         console.log('ID Missing!')
      }

      const idPaciente = request.params.id;
      const paciente = await AppDataSource.manager.delete(Paciente, {
         idpac: +idPaciente
      });

      response.status(201).json({
         status: 'success',
         response: `Paciente de id ${idPaciente} apagado com sucesso!`
      });
   }
}