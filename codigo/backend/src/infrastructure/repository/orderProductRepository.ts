import prisma from '../database/database';

// Interface para definir a estrutura dos dados de OrderProduct
export interface OrderProductProps {
  id?: string;  // ID opcional, será gerado automaticamente
  orderId: string;
  productId: string;
  quantity: number;
  price: number;
}

// Repositório para lidar com operações de banco de dados relacionadas a OrderProduct
export class OrderProductRepository {
  async create(orderProductData: OrderProductProps) {
    try {
      return await prisma.orderProduct.create({
        data: orderProductData,
      });
    } catch (error: any) {
      throw new Error('Error creating order product in repository: ' + error.message);
    }
  }

  async findById(id: string) {
    try {
      return await prisma.orderProduct.findUnique({
        where: { id },
      });
    } catch (error: any) {
      throw new Error('Error retrieving order product in repository: ' + error.message);
    }
  }

  async findByOrder(orderId: string) {
    try {
      return await prisma.orderProduct.findMany({
        where: { orderId },
      });
    } catch (error: any) {
      throw new Error('Error retrieving order products by order in repository: ' + error.message);
    }
  }

  async findByProduct(productId: string) {
    try {
      return await prisma.orderProduct.findMany({
        where: { productId },
      });
    } catch (error: any) {
      throw new Error('Error retrieving order products by product in repository: ' + error.message);
    }
  }

  async delete(id: string) {
    try {
      return await prisma.orderProduct.delete({
        where: { id },
      });
    } catch (error: any) {
      throw new Error('Error deleting order product in repository: ' + error.message);
    }
  }
}
