// Importação de bibliotecas
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

// Especificação de tipagem do objeto "Paciente"
@Entity()
export default class Paciente {
   @PrimaryGeneratedColumn()
   idpac: number;

   @Column()
   nomepac: string;

   @Column()
   sobrepac: string;

   @Column()
   cpf: string;

   @Column()
   idprof: number;

   @Column()
   email: string;

   @Column()
   senha: string;

   @Column({ type: 'datetime' })
   nasc: Date;

   @Column()
   tel: string;

   @Column()
   cep: string;
}