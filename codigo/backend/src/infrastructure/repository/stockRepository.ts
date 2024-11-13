import prisma from '../database/database';

// Interface para definir a estrutura dos dados de Stock
export interface StockProps {
  id?: string;  // ID opcional, será gerado automaticamente
  storeId: string;
  productId: string;
  quantity: number;
}

// Repositório para lidar com operações de banco de dados relacionadas a Stock
export class StockRepository {
  async create(stockData: StockProps) {
    try {
      return await prisma.stock.create({
        data: stockData,
      });
    } catch (error: any) {
      throw new Error('Error creating stock in repository: ' + error.message);
    }
  }

  async update(id: string, updateData: Partial<StockProps>) {
    try {
      return await prisma.stock.update({
        where: { id },
        data: updateData,
      });
    } catch (error: any) {
      throw new Error('Error updating stock in repository: ' + error.message);
    }
  }

  async findById(id: string) {
    try {
      return await prisma.stock.findUnique({
        where: { id },
      });
    } catch (error: any) {
      throw new Error('Error retrieving stock in repository: ' + error.message);
    }
  }

  async findByStore(storeId: string) {
    try {
      return await prisma.stock.findMany({
        where: { storeId },
      });
    } catch (error: any) {
      throw new Error('Error retrieving stock by store in repository: ' + error.message);
    }
  }

  async findByProduct(productId: string) {
    try {
      return await prisma.stock.findMany({
        where: { productId },
      });
    } catch (error: any) {
      throw new Error('Error retrieving stock by product in repository: ' + error.message);
    }
  }

  async delete(id: string) {
    try {
      return await prisma.stock.delete({
        where: { id },
      });
    } catch (error: any) {
      throw new Error('Error deleting stock in repository: ' + error.message);
    }
  }
}
