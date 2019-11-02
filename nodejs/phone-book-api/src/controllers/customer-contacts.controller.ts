import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {CustomerContacts} from '../models';
import {CustomerContactsRepository} from '../repositories';

export class CustomerContactsController {
  constructor(
    @repository(CustomerContactsRepository)
    public customerContactsRepository : CustomerContactsRepository,
  ) {}

  @post('/contacts', {
    responses: {
      '200': {
        description: 'CustomerContacts model instance',
        content: {'application/json': {schema: getModelSchemaRef(CustomerContacts)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CustomerContacts, {
            title: 'NewCustomerContacts',
            
          }),
        },
      },
    })
    customerContacts: CustomerContacts,
  ): Promise<CustomerContacts> {
    return this.customerContactsRepository.create(customerContacts);
  }

  @get('/contacts/count', {
    responses: {
      '200': {
        description: 'CustomerContacts model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(CustomerContacts)) where?: Where<CustomerContacts>,
  ): Promise<Count> {
    return this.customerContactsRepository.count(where);
  }

  @get('/contacts', {
    responses: {
      '200': {
        description: 'Array of CustomerContacts model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(CustomerContacts)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(CustomerContacts)) filter?: Filter<CustomerContacts>,
  ): Promise<CustomerContacts[]> {
    return this.customerContactsRepository.find(filter);
  }

  @patch('/contacts', {
    responses: {
      '200': {
        description: 'CustomerContacts PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CustomerContacts, {partial: true}),
        },
      },
    })
    customerContacts: CustomerContacts,
    @param.query.object('where', getWhereSchemaFor(CustomerContacts)) where?: Where<CustomerContacts>,
  ): Promise<Count> {
    return this.customerContactsRepository.updateAll(customerContacts, where);
  }

  @get('/contacts/{id}', {
    responses: {
      '200': {
        description: 'CustomerContacts model instance',
        content: {'application/json': {schema: getModelSchemaRef(CustomerContacts)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<CustomerContacts> {
    return this.customerContactsRepository.findById(id);
  }

  @patch('/contacts/{id}', {
    responses: {
      '204': {
        description: 'CustomerContacts PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CustomerContacts, {partial: true}),
        },
      },
    })
    customerContacts: CustomerContacts,
  ): Promise<void> {
    await this.customerContactsRepository.updateById(id, customerContacts);
  }

  @put('/contacts/{id}', {
    responses: {
      '204': {
        description: 'CustomerContacts PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() customerContacts: CustomerContacts,
  ): Promise<void> {
    await this.customerContactsRepository.replaceById(id, customerContacts);
  }

  @del('/contacts/{id}', {
    responses: {
      '204': {
        description: 'CustomerContacts DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.customerContactsRepository.deleteById(id);
  }
}
