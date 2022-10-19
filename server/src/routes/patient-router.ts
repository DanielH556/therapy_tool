// Importações de Bibliotecas e Objetos
import * as express from 'express';
import Patient from 'models/patient';
import patientsRepository from '../repositories/patients-repository';

const patientRouter = express.Router();

// POST de pacientes
patientRouter.post('/patient', (req, res) => {
   const patient: Patient = req.body;
   //TODO: Criar e salvar um paciente
   patientsRepository.criar(patient, (id) => {
      if(id) {
         res.status(201).location(`/patients/${id}`).send()
      } else {
         res.status(400).send()
      }
   });
});

// Receber todos os pacientes 
patientRouter.get('/patients', (req, res) => {
   patientsRepository.lerTodos((patients) => res.json(patients));
});

// Receber o paciente de acordo com o ID
patientRouter.get('/patients/:id', (req, res) => {
   // Tratativa de ID do paciente
   const id: number = +req.params.id

   patientsRepository.ler(id, (patient) => {
      if (patient) {
         res.json(patient);
      } else {
         res.status(404).send();
      }
   });
});

patientRouter.put('/patients/:id', (req, res) => {
   const id: number = +req.params.id;
   patientsRepository.atualizar(id, req.body, (notFound) => {
      if (notFound) {
         res.status(404).send();
      } else {
         res.status(204).send();
      }
   })
});

patientRouter.delete('/patients/:id', (req, res) => {
   const id: number = +req.params.id;
   patientsRepository.apagar(id, (notFound) => {
      if (notFound) {
         res.status(404).send();
      } else {
         res.status(204).send();
      }
   })
});

export default patientRouter;