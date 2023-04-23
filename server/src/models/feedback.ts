// Importação de bibliotecas
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

// Especificação de tipagem do objeto "Paciente"
@Entity()
export default class Feedback {
   @PrimaryGeneratedColumn()
   id_feed: number;

   @Column({ type: 'datetime' })
   data_feed: Date;

   @Column()
   idpac: number;

   @Column()
   humor: number;

   @Column()
   feedback: string;
}