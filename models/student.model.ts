import {Entity, model, property, belongsTo, hasOne} from '@loopback/repository';
import {Department} from './department.model';
import {Address} from './address.model';

@model()
export class Student extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    // required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  fname: string;

  @property({
    type: 'string',
    required: true,
  })
  lname: string;

  @property({
    type: 'number',
  })
  courseId?: number;

  @belongsTo(() => Department)
  departmentId: number;

  @property({
    type: 'number',
  })
  addressId?: number;

  @hasOne(() => Address)
  address: Address;

  constructor(data?: Partial<Student>) {
    super(data);
  }
}

export interface StudentRelations {
  // describe navigational properties here
}

export type StudentWithRelations = Student & StudentRelations;
