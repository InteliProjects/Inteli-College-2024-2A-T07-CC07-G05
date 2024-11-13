import { ProductRepository, ProductProps } from '../../infrastructure/repository/productRepository';

export class ProductService {
  private productRepository = new ProductRepository();

  async createProduct(productData: ProductProps) {
    try {
      return await this.productRepository.create(productData);
    } catch (error: any) {
      throw new Error('Error creating product: ' + error.message);
    }
  }

  async getAllProducts() {
    try {
      return await this.productRepository.findAll();
    } catch (error: any) {
      throw new Error('Error retrieving products: ' + error.message);
    }
  }

  async getProductById(id: string) {
    try {
      const product = await this.productRepository.findById(id);
      if (!product) throw new Error('Product not found');
      return product;
    } catch (error: any) {
      throw new Error('Error retrieving product: ' + error.message);
    }
  }

  async updateProduct(id: string, updateData: Partial<ProductProps>) {
    try {
      return await this.productRepository.update(id, updateData);
    } catch (error: any) {
      throw new Error('Error updating product: ' + error.message);
    }
  }

  async deleteProduct(id: string) {
    try {
      await this.productRepository.delete(id);
    } catch (error: any) {
      throw new Error('Error deleting product: ' + error.message);
    }
  }
}
