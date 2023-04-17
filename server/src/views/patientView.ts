import Pacientes from "models/patient";

export default {
   render(patient: Pacientes) {
      return {
         id: patient.idpac,
         name: patient.nomepac,
         surname: patient.sobrepac,
         cpf: patient.cpf,
         email: patient.email,
         password: patient.senha,
         birth_date: patient.nasc,
         prof_id: patient.idprof,
         phone: patient.tel,
         cep: patient.cep
      }
   },

   renderMany(patients: Pacientes[]) {
      return patients.map(patient => this.render(patient))
   }
}