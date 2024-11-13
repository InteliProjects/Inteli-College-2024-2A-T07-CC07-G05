import prisma from '../database/database';

export interface ProductProps {
  id?: string;
  name: string;
  sku: string;
  category: string;
  description: string;
  price: number;
}

export class ProductRepository {
  async create(productData: ProductProps) {
    try {
      return await prisma.product.create({
        data: productData,
      });
    } catch (error: any) {
      throw new Error('Error creating product in repository: ' + error.message);
    }
  }

  async findAll() {
    try {
      return await prisma.product.findMany();
    } catch (error: any) {
      throw new Error('Error retrieving products in repository: ' + error.message);
    }
  }

  async findById(id: string) {
    try {
      return await prisma.product.findUnique({
        where: { id },
      });
    } catch (error: any) {
      throw new Error('Error retrieving product in repository: ' + error.message);
    }
  }

  async update(id: string, updateData: Partial<ProductProps>) {
    try {
      return await prisma.product.update({
        where: { id },
        data: updateData,
      });
    } catch (error: any) {
      throw new Error('Error updating product in repository: ' + error.message);
    }
  }

  async delete(id: string) {
    try {
      return await prisma.product.delete({
        where: { id },
      });
    } catch (error: any) {
      throw new Error('Error deleting product in repository: ' + error.message);
    }
  }
}
