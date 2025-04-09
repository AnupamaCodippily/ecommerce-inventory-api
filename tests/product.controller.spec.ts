import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from '@modules/products/product.controller';
import { ProductService } from '@modules/products/product.service';
import IProduct from '@common/interfaces/product.interface';
import IProductService from '@common/interfaces/product.service.interface';

describe('ProductController', () => {
  let controller: ProductController;
  let service: IProductService;

  const DUMMY_PRODUCT: IProduct = {
    name: "Test Product",
    price: 123.33,
    stock: 3,
    sku: "prodtest1",
    id: 1,
    category: 'test category',
    images: [],
    tags: []
  }

  const mockProductService: IProductService = {
    getAllProducts: jest.fn(() => Promise.resolve([DUMMY_PRODUCT])),

    getProductById: jest.fn((id: number) => Promise.resolve(DUMMY_PRODUCT)),

    createProduct: jest.fn((product: IProduct) => Promise.resolve({...product})),

    updateProduct: jest.fn((id: number, updates: Partial<IProduct>) => Promise.resolve({ id, ...updates })),

    deleteProduct: jest.fn((id: number) => Promise.resolve()),

    getProductsByFilter: jest.fn((filter: any) => Promise.resolve([{ id: 1, name: 'Test Product' }])),

    searchProducts: jest.fn((query: string) => Promise.resolve([{ id: 1, name: 'Test Product' }])),
  };


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [
        {
          provide: ProductService,
          useValue: mockProductService,
        },
      ],
      exports: [ProductService],
    }).compile();

    controller = module.get<ProductController>(ProductController);
    service = module.get<ProductService>(ProductService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of products', async () => {
      const result = await controller.getAllProducts();
      expect(result).toEqual([DUMMY_PRODUCT]);
      expect(service.getAllProducts).toHaveBeenCalled();
    });
  });

  describe('findById', () => {
    it('should return a single product', async () => {
      const result = await controller.findProductById(1);
      expect(result).toEqual(DUMMY_PRODUCT);
      expect(service.getProductById).toHaveBeenCalledWith(1);
    });
  });

  describe('create', () => {
    it('should create and return a product', async () => {
      const productData: IProduct = { ...DUMMY_PRODUCT, name: 'New Product', price: 100 };
      const result = await controller.createProduct(productData);
      console.log(result);
      expect(result).toEqual({ ...DUMMY_PRODUCT, name: 'New Product', price: 100 });
      expect(service.createProduct).toHaveBeenCalledWith(productData);
    });
  });

  describe('update', () => {
    it('should update and return the updated product', async () => {
      const updates = { name: 'Updated Product' };
      const result = await controller.updateProduct(1, updates);
      expect(result).toEqual({id: 1, ...updates });
      expect(service.updateProduct).toHaveBeenCalledWith(1, updates);
    });
  });

  describe('delete', () => {
    it('should delete a product', async () => {
      await controller.deleteProduct(1);
      expect(service.deleteProduct).toHaveBeenCalledWith(1);
    });
  });
});