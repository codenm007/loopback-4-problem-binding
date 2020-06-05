import {Entity, model, property, hasOne} from '@loopback/repository';
import {Student} from './student.model';

@model()
export class Address extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  city: string;

  @property({
    type: 'number',
  })
  zip?: number;

  @property({
    type: 'string',
    required: true,
  })
  phone?: string;

  @hasOne(() => Student)
  student: Student;

  @property({
    type: 'number',
  })
  studentId?: number;

  constructor(data?: Partial<Address>) {
    super(data);
  }
}

export interface AddressRelations {
  // describe navigational properties here
}

export type AddressWithRelations = Address & AddressRelations;
