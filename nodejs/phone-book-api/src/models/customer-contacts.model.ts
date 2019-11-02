import { Entity, model, property } from '@loopback/repository';

@model({ settings: { strict: false } })
export class CustomerContacts extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  fullName: string;

  @property({
    type: 'number',
    required: true,
  })
  phone: number;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<CustomerContacts>) {
    super(data);
  }
}

export interface CustomerContactsRelations {
  // describe navigational properties here
}

export type CustomerContactsWithRelations = CustomerContacts & CustomerContactsRelations;
