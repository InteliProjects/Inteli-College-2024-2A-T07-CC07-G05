import prisma from '../database/database';

// Interface para definir a estrutura dos dados de Order
export interface OrderProps {
  id?: string;  // ID opcional, será gerado automaticamente
  storeId: string;
  customerId: string;
  date?: Date;
  status: string;
}

// Repositório para lidar com operações de banco de dados relacionadas a Order
export class OrderRepository {
  async create(orderData: OrderProps) {
    try {
      return await prisma.order.create({
        data: orderData,
      });
    } catch (error: any) {
      throw new Error('Error creating order in repository: ' + error.message);
    }
  }

  async updateStatus(id: string, status: string) {
    try {
      return await prisma.order.update({
        where: { id },
        data: { status },
      });
    } catch (error: any) {
      throw new Error('Error updating order status in repository: ' + error.message);
    }
  }

  async findById(id: string) {
    try {
      return await prisma.order.findUnique({
        where: { id },
      });
    } catch (error: any) {
      throw new Error('Error retrieving order in repository: ' + error.message);
    }
  }

  async listByCustomer(customerId: string) {
    try {
      return await prisma.order.findMany({
        where: { customerId },
      });
    } catch (error: any) {
      throw new Error('Error retrieving orders by customer in repository: ' + error.message);
    }
  }

  async listByStore(storeId: string) {
    try {
      return await prisma.order.findMany({
        where: { storeId },
      });
    } catch (error: any) {
      throw new Error('Error retrieving orders by store in repository: ' + error.message);
    }
  }

  async delete(id: string) {
    try {
      return await prisma.order.delete({
        where: { id },
      });
    } catch (error: any) {
      throw new Error('Error deleting order in repository: ' + error.message);
    }
  }
}
