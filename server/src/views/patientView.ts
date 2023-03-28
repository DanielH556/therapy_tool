import Pacientes from "models/patient";

export default {
   render(patient: Pacientes) {
      return {
         id: patient.id,
         name: patient.nome,
         // surname: patient.surname,
         cpf: patient.cpf,
         // email: patient.email,
         password: patient.senha,
         // birth_date: patient.data_nasc,
         // prof_id: patient.idProf,
         // phone: patient.telefone,
         // cep: patient.cep
      }
   },

   renderMany(patients: Pacientes[]) {
      return patients.map(patient => this.render(patient))
   }
}