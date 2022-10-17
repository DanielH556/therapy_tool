import * as express from 'express';
import Patient from 'models/patient';

const patientRouter = express.Router();

patientRouter.post('/patients', (req, res) => {
   const patient: Patient = req.body;
   //TODO: Criar e salvar um paciente
   const id = 123;
   res.status(201).location(`/patients/${id}`).send()
});

patientRouter.get('/patients', (req, res) => {
   const patients: Patient[] = [
      {
         id: 1,
         name: 'Daniel',
         password: '123456',
         cpf: '49307944806'
      },
      {
         id: 2,
         name: 'Juniper',
         password: '098765',
         cpf: '1237685019'
      }
   ];
   res.json(patients);
});

patientRouter.get('/patients/:id', (req, res) => {
   const id: number = +req.params.id
   const patient: Patient = {
      id: id,
      name: `Patient ${id}`,
      password: `PW from Patient ${id}`,
      cpf: `CPF from Patient ${id}`
   };
   res.json(patient);
});

patientRouter.put('/itens/:id', (req, res) => {
   const id: number = +req.params.id;
   res.status(204).send();
});

patientRouter.delete('/itens/:id', (req, res) => {
   const id: number = +req.params.id;
   res.status(204).send()
});

export default patientRouter;