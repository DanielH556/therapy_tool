import { Request, Response } from 'express';
import Profissional from '../models/therapist'
import AppDataSource from '../config/dataSource';

export default{
   // Mostrar todos os terapeutas
   async index(request: Request, response: Response) {
      const prof = await AppDataSource.manager.find(Profissional)
      response.send(prof)
   },

   // Mostrar o prof de acordo com o id no banco de dados
   async show(request: Request, response: Response) {
      const idprof = request.params.id;
      const prof = await AppDataSource.manager.findOneBy(Profissional, {
         idprof: +idprof,
      })
      response.send(prof)
   },


   // Criar uma nova Entry na tabela "profissional"
   async create(request: Request, response: Response) {
      const { nome, sobrenome, cpf, email, senha, datanascimento, } = request.body;
      const prof = await AppDataSource.manager.insert(Profissional, { 
         nomeprof: nome,
         sobreprof: sobrenome,
         cpf: cpf,
         email: email,
         senha: senha,
         nasc: datanascimento,
      });

      response.status(201).json({
         status: "success",
         data: {
            nomeprof: nome,
            sobreprof: sobrenome,
            cpf: cpf,
            email: email,
            senha: senha,
            nasc: datanascimento,
         }
      })
   },

   // Apagar um prof da tabela no banco de dados
   async delete(request: Request, response: Response) {
      if (!request.params.id) {
         console.log('ID Missing!')
      }

      const idprof = request.params.id;
      const prof = await AppDataSource.manager.delete(Profissional, {
         idprof: +idprof
      });

      response.status(201).json({
         status: 'success',
         response: `prof de id ${idprof} apagado com sucesso!`
      });
   }
}