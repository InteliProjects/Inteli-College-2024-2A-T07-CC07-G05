import prisma from '../database/database';

// Definição da interface para os dados de Customer
export interface CustomerProps {
  id?: string;  // ID opcional, será gerado automaticamente
  name: string;
  address: string;
  zipCode: string;
  phone: string;
  email: string;
}

// Classe CustomerRepository para gerenciar operações de banco de dados
export class CustomerRepository {
  // Método para criar um novo cliente
  async create(customerData: CustomerProps) {
    try {
      return await prisma.customer.create({
        data: customerData,
      });
    } catch (error: any) {
      throw new Error('Error creating customer in repository: ' + error.message);
    }
  }

  // Método para buscar todos os clientes
  async findAll() {
    try {
      return await prisma.customer.findMany();
    } catch (error: any) {
      throw new Error('Error retrieving customers in repository: ' + error.message);
    }
  }

  // Método para buscar um cliente específico pelo ID
  async findById(id: string) {
    try {
      return await prisma.customer.findUnique({
        where: { id },
      });
    } catch (error: any) {
      throw new Error('Error retrieving customer in repository: ' + error.message);
    }
  }

  // Método para atualizar um cliente existente
  async update(id: string, updateData: Partial<CustomerProps>) {
    try {
      return await prisma.customer.update({
        where: { id },
        data: updateData,
      });
    } catch (error: any) {
      throw new Error('Error updating customer in repository: ' + error.message);
    }
  }

  // Método para deletar um cliente existente
  async delete(id: string) {
    try {
      return await prisma.customer.delete({
        where: { id },
      });
    } catch (error: any) {
      throw new Error('Error deleting customer in repository: ' + error.message);
    }
  }
}
