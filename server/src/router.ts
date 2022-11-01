import { Router } from 'express';
import PatientController from './controllers/PatientController';

const routes = Router();

routes.get('/patients', PatientController.index);

export default routes;