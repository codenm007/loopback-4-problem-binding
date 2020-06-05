import {DefaultCrudRepository} from '@loopback/repository';
import {Product, ProductRelations} from '../models';
import {ProductdbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProductRepository extends DefaultCrudRepository<
  Product,
  typeof Product.prototype.id,
  ProductRelations
> {
  constructor(
    @inject('datasources.productdb') dataSource: ProductdbDataSource,
  ) {
    super(Product, dataSource);
  }
}
