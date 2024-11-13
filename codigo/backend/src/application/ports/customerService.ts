import { v4 as uuidv4 } from 'uuid';  // Importa a função para gerar UUIDs
import { CustomerRepository, CustomerProps } from '../../infrastructure/repository/customerRepository';

// Classe CustomerService para lógica de negócios
export class CustomerService {
  private customerRepository = new CustomerRepository(); // Instância do repositório de Clientes

  // Método para criar um novo cliente
  async createCustomer(customerData: CustomerProps) {
    try {
      const id = uuidv4();  // Gera um UUID aleatório
      const customerWithId = { ...customerData, id };  // Adiciona o UUID aos dados do cliente
      return await this.customerRepository.create(customerWithId);
    } catch (error: any) {
      throw new Error('Error creating customer: ' + error.message);
    }
  }

  // Método para obter todos os clientes
  async getAllCustomers() {
    try {
      return await this.customerRepository.findAll();
    } catch (error: any) {
      throw new Error('Error retrieving customers: ' + error.message);
    }
  }

  // Método para obter um cliente pelo ID
  async getCustomerById(id: string) {
    try {
      const customer = await this.customerRepository.findById(id);
      if (!customer) throw new Error('Customer not found');  // Lança erro se o cliente não for encontrado
      return customer;
    } catch (error: any) {
      throw new Error('Error retrieving customer: ' + error.message);
    }
  }

  // Método para atualizar um cliente
  async updateCustomer(id: string, updateData: Partial<CustomerProps>) {
    try {
      return await this.customerRepository.update(id, updateData);
    } catch (error: any) {
      throw new Error('Error updating customer: ' + error.message);
    }
  }

  // Método para deletar um cliente
  async deleteCustomer(id: string) {
    try {
      await this.customerRepository.delete(id);
    } catch (error: any) {
      throw new Error('Error deleting customer: ' + error.message);
    }
  }
}
