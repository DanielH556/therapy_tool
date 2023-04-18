import { Router } from 'express';
import PatientController from './controllers/PatientController';
import ApiController from './controllers/ApiController';

const routes = Router();

// Rotas do servidor
routes.get('/paciente', PatientController.index);
routes.get('/paciente/:id', PatientController.show)
routes.post('/novoPaciente', PatientController.create)
routes.delete('/deletePaciente/:id', PatientController.delete)
routes.get('/ultimosDias/:id', ApiController.ultimosDias)
routes.get('/wordcloud/:id', ApiController.wordcloud)

export default routes;