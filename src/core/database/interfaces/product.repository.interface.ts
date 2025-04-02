import IDatabaseErrorResponse from "@common/interfaces/database-error-response.interface";
import IProduct from "@common/interfaces/product.interface";

export interface IProductRepository {
  
  create(product: IProduct): Promise<IProduct| IDatabaseErrorResponse>;

  findById(id: number): Promise<IProduct | null>;

  update(id: string, updates: Partial<IProduct>): Promise<IProduct>;

  delete(id: string): Promise<void>;

  findAll(): Promise<IProduct[]>;

}
