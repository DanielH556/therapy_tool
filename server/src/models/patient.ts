// Importação de bibliotecas
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

// Especificação de tipagem do objeto "Paciente"
@Entity()
export default class Pacientes {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   nome: string;

   @Column()
   cpf: string;

   @Column()
   senha: string;
   // @PrimaryGeneratedColumn()
   // idPaciente: number;

   // @Column()
   // nomePaciente: string;

   // @Column()
   // sobrenome: string;

   // @Column()
   // cpf: string;

   // @Column()
   // email: string;

   // @Column()
   // senha: string;

   // @Column()
   // data_nasc: string;

   // @Column()
   // idProf: number;

   // @Column()
   // telefone: string;

   // @Column()
   // cep: string;
}