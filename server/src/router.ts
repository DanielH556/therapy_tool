import { Router } from 'express';
import PatientController from './controllers/PatientController';

const routes = Router();

// Rotas do servidor
routes.get('/paciente', PatientController.index);
routes.get('/paciente/:id', PatientController.show)
routes.post('/novoPaciente', PatientController.create)
routes.delete('/deletePaciente/:id', PatientController.delete)

export default routes;