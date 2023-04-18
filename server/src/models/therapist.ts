// Importação de bibliotecas
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

// Especificação de tipagem do objeto "Terapeuta"
@Entity()
export default class Profissional {
   @PrimaryGeneratedColumn()
   idprof: number;

   @Column()
   nomeprof: string;

   @Column()
   sobreprof: string;

   @Column()
   cpf: string;

   @Column()
   email: string;

   @Column()
   senha: string;

   @Column({ type: 'datetime' })
   nasc: Date;
}