import { OrderRepository, OrderProps } from '../../infrastructure/repository/orderRepository';

// Serviço para lidar com lógica de negócios relacionada a Order
export class OrderService {
  private orderRepository = new OrderRepository();

  async createOrder(orderData: OrderProps) {
    try {
      return await this.orderRepository.create(orderData);
    } catch (error: any) {
      throw new Error('Error creating order: ' + error.message);
    }
  }

  async updateOrderStatus(id: string, status: string) {
    try {
      return await this.orderRepository.updateStatus(id, status);
    } catch (error: any) {
      throw new Error('Error updating order status: ' + error.message);
    }
  }

  async getOrderById(id: string) {
    try {
      const order = await this.orderRepository.findById(id);
      if (!order) throw new Error('Order not found');
      return order;
    } catch (error: any) {
      throw new Error('Error retrieving order: ' + error.message);
    }
  }

  async listOrdersByCustomer(customerId: string) {
    try {
      return await this.orderRepository.listByCustomer(customerId);
    } catch (error: any) {
      throw new Error('Error retrieving orders by customer: ' + error.message);
    }
  }

  async listOrdersByStore(storeId: string) {
    try {
      return await this.orderRepository.listByStore(storeId);
    } catch (error: any) {
      throw new Error('Error retrieving orders by store: ' + error.message);
    }
  }

  async deleteOrder(id: string) {
    try {
      await this.orderRepository.delete(id);
    } catch (error: any) {
      throw new Error('Error deleting order: ' + error.message);
    }
  }
}
