import prisma from '../database/database';

// Interface para definir a estrutura dos dados de Store
export interface StoreProps {
  id?: string;  // ID opcional, será gerado automaticamente
  sales24HrCount: number;
  status: string;
  zipCode: string;
  address: string;
  zipCodeRange: string;
}

// Repositório para lidar com operações de banco de dados relacionadas a Store
export class StoreRepository {
  async create(storeData: StoreProps) {
    try {
      return await prisma.store.create({
        data: storeData,
      });
    } catch (error: any) {
      throw new Error('Error creating store in repository: ' + error.message);
    }
  }

  async findAll() {
    try {
      return await prisma.store.findMany();
    } catch (error: any) {
      throw new Error('Error retrieving stores in repository: ' + error.message);
    }
  }

  async findById(id: string) {
    try {
      return await prisma.store.findUnique({
        where: { id },
      });
    } catch (error: any) {
      throw new Error('Error retrieving store in repository: ' + error.message);
    }
  }

  async listByCEP(zipCode: string) {
    try {
      return await prisma.store.findMany({
        where: { zipCode },
      });
    } catch (error: any) {
      throw new Error('Error retrieving stores by zip code in repository: ' + error.message);
    }
  }

  async update(id: string, updateData: Partial<StoreProps>) {
    try {
      return await prisma.store.update({
        where: { id },
        data: updateData,
      });
    } catch (error: any) {
      throw new Error('Error updating store in repository: ' + error.message);
    }
  }

  async delete(id: string) {
    try {
      return await prisma.store.delete({
        where: { id },
      });
    } catch (error: any) {
      throw new Error('Error deleting store in repository: ' + error.message);
    }
  }
}
