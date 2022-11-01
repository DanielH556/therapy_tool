import Patient from "models/patient";

export default {
   render(patient: Patient) {
      return {
         id: patient.idPaciente,
         name: patient.nomePaciente,
         surname: patient.sobrenome,
         cpf: patient.cpf,
         email: patient.email,
         password: patient.senha,
         birth_date: patient.data_nasc,
         prof_id: patient.idProf,
         phone: patient.telefone,
         cep: patient.cep
      }
   },

   renderMany(patients: Patient[]) {
      return patients.map(patient => this.render(patient))
   }
}