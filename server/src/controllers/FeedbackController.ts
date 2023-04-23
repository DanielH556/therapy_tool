import { Request, Response } from 'express';
import AppDataSource from '../config/dataSource';
import Feedback from '../models/feedback';

export default{
   // Mostrar todos os feedbacks
   async index(request: Request, response: Response) {
      const feedBack = await AppDataSource.manager.find(Feedback)
      response.send(feedBack)
   },

   // Mostrar o feedBack de acordo com o id no banco de dados
   async show(request: Request, response: Response) {
      const id_feed = request.params.id;
      const feedBack = await AppDataSource.manager.findOneBy(Feedback, {
         id_feed: +id_feed,
      })
      response.send(feedBack)
   },

   // Criar uma nova Entry na tabela "feedback"
   async create(request: Request, response: Response) {
      const { data_feed, idpac, humor, feedback } = request.body;
      const feedBack = await AppDataSource.manager.insert(Feedback, { 
        data_feed: data_feed,
        idpac: idpac,
        humor: humor,
        feedback: feedback
      });

      response.status(201).json({
         status: "success",
         data: {
            data_feed: data_feed,
            idpac: idpac,
            humor: humor,
            feedback: feedback
         }
      })
   },

   // Apagar um feedBack da tabela no banco de dados
   async delete(request: Request, response: Response) {
      if (!request.params.id) {
         console.log('ID Missing!')
      }

      const idFeed = request.params.id;
      const feedBack = await AppDataSource.manager.delete(Feedback, {
         idpac: +idFeed
      });

      response.status(201).json({
         status: 'success',
         response: `Feedback de id ${idFeed} apagado com sucesso!`
      });
   }
}