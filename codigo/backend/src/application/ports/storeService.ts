import { StoreRepository, StoreProps } from '../../infrastructure/repository/storeRepository';

// Serviço para lidar com lógica de negócios relacionada a Store
export class StoreService {
  private storeRepository = new StoreRepository();

  async createStore(storeData: StoreProps) {
    try {
      return await this.storeRepository.create(storeData);
    } catch (error: any) {
      throw new Error('Error creating store: ' + error.message);
    }
  }

  async getAllStores() {
    try {
      return await this.storeRepository.findAll();
    } catch (error: any) {
      throw new Error('Error retrieving stores: ' + error.message);
    }
  }

  async getStoreById(id: string) {
    try {
      const store = await this.storeRepository.findById(id);
      if (!store) throw new Error('Store not found');
      return store;
    } catch (error: any) {
      throw new Error('Error retrieving store: ' + error.message);
    }
  }

  async listStoresByCEP(zipCode: string) {
    try {
      return await this.storeRepository.listByCEP(zipCode);
    } catch (error: any) {
      throw new Error('Error retrieving stores by zip code: ' + error.message);
    }
  }

  async updateStore(id: string, updateData: Partial<StoreProps>) {
    try {
      return await this.storeRepository.update(id, updateData);
    } catch (error: any) {
      throw new Error('Error updating store: ' + error.message);
    }
  }

  async deleteStore(id: string) {
    try {
      await this.storeRepository.delete(id);
    } catch (error: any) {
      throw new Error('Error deleting store: ' + error.message);
    }
  }
}
