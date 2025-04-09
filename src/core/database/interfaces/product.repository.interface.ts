import IDatabaseErrorResponse from "@common/interfaces/database-error-response.interface";
import IProduct from "@common/interfaces/product.interface";

export interface IProductRepository {
  
  create(product: IProduct): Promise<IProduct| IDatabaseErrorResponse>;

  findById(id: number): Promise<IProduct | null>;

  update(id: number, updates: Partial<IProduct>): Promise<Partial<IProduct>>;

  delete(id: number): Promise<void>;

  findAll(): Promise<IProduct[]>;

}
