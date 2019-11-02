import {DefaultCrudRepository} from '@loopback/repository';
import {CustomerContacts, CustomerContactsRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CustomerContactsRepository extends DefaultCrudRepository<
  CustomerContacts,
  typeof CustomerContacts.prototype.id,
  CustomerContactsRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(CustomerContacts, dataSource);
  }
}
