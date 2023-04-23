import { Router, Request, Response } from 'express';
import PatientController from './controllers/PatientController';
import ApiController from './controllers/ApiController';
import TherapistController from './controllers/TherapistController';
import FeedbackController from './controllers/FeedbackController';

const routes = Router();

// Rotas do servidor

routes.get('/paciente', PatientController.index);
routes.get('/paciente/:id', PatientController.show)
routes.post('/novoPaciente', PatientController.create)
routes.delete('/deletePaciente/:id', PatientController.delete)
routes.get('/paciente/:cpf/:password', PatientController.checkCred)

routes.get('/profissional', TherapistController.index)
routes.get('/profissional/:id', TherapistController.show)
routes.post('/novoProfissional', TherapistController.create)
routes.delete('/deleteProfissional/:id', TherapistController.delete)

routes.get('/feedback', FeedbackController.index);
routes.post('/novoFeedback', FeedbackController.create)

routes.get('/ultimosDias/:id', ApiController.ultimosDias)
routes.get('/wordcloud/:id', ApiController.wordcloud)

export default routes;