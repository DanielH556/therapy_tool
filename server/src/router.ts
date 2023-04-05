import { Router } from 'express';
import PatientController from './controllers/PatientController';

const routes = Router();

// Rotas do servidor
routes.get('/patients', PatientController.index);
routes.get('/patient/:id', PatientController.show)

export default routes;