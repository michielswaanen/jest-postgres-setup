import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
class UserEntity  {

    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column('text')
    name!: string
}

export default UserEntity