import { StockRepository, StockProps } from '../../infrastructure/repository/stockRepository';

// Serviço para lidar com lógica de negócios relacionada a Stock
export class StockService {
  private stockRepository = new StockRepository();

  async createStock(stockData: StockProps) {
    try {
      return await this.stockRepository.create(stockData);
    } catch (error: any) {
      throw new Error('Error creating stock: ' + error.message);
    }
  }

  async updateStock(id: string, updateData: Partial<StockProps>) {
    try {
      return await this.stockRepository.update(id, updateData);
    } catch (error: any) {
      throw new Error('Error updating stock: ' + error.message);
    }
  }

  async getStockById(id: string) {
    try {
      const stock = await this.stockRepository.findById(id);
      if (!stock) throw new Error('Stock not found');
      return stock;
    } catch (error: any) {
      throw new Error('Error retrieving stock: ' + error.message);
    }
  }

  async getStockByStore(storeId: string) {
    try {
      return await this.stockRepository.findByStore(storeId);
    } catch (error: any) {
      throw new Error('Error retrieving stock by store: ' + error.message);
    }
  }

  async getStockByProduct(productId: string) {
    try {
      return await this.stockRepository.findByProduct(productId);
    } catch (error: any) {
      throw new Error('Error retrieving stock by product: ' + error.message);
    }
  }

  async deleteStock(id: string) {
    try {
      await this.stockRepository.delete(id);
    } catch (error: any) {
      throw new Error('Error deleting stock: ' + error.message);
    }
  }
}
