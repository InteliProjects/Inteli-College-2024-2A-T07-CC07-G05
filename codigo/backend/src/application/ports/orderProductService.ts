import { OrderProductRepository, OrderProductProps } from '../../infrastructure/repository/orderProductRepository';

// Serviço para lidar com lógica de negócios relacionada a OrderProduct
export class OrderProductService {
  private orderProductRepository = new OrderProductRepository();

  async createOrderProduct(orderProductData: OrderProductProps) {
    try {
      return await this.orderProductRepository.create(orderProductData);
    } catch (error: any) {
      throw new Error('Error creating order product: ' + error.message);
    }
  }

  async getOrderProductById(id: string) {
    try {
      const orderProduct = await this.orderProductRepository.findById(id);
      if (!orderProduct) throw new Error('Order product not found');
      return orderProduct;
    } catch (error: any) {
      throw new Error('Error retrieving order product: ' + error.message);
    }
  }

  async getOrderProductsByOrder(orderId: string) {
    try {
      return await this.orderProductRepository.findByOrder(orderId);
    } catch (error: any) {
      throw new Error('Error retrieving order products by order: ' + error.message);
    }
  }

  async getOrderProductsByProduct(productId: string) {
    try {
      return await this.orderProductRepository.findByProduct(productId);
    } catch (error: any) {
      throw new Error('Error retrieving order products by product: ' + error.message);
    }
  }

  async deleteOrderProduct(id: string) {
    try {
      await this.orderProductRepository.delete(id);
    } catch (error: any) {
      throw new Error('Error deleting order product: ' + error.message);
    }
  }
}
