// Especificação de tipagem do objeto "Paciente"
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('patients')
export default class Patient {
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