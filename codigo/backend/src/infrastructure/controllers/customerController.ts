import { Request, Response } from 'express';
import { CustomerService } from '../../application/ports/customerService';

const customerService = new CustomerService();  // Instância do serviço de Clientes

// Controlador para criar um novo cliente
export const createCustomer = async (req: Request, res: Response) => {
  try {
    const customer = await customerService.createCustomer(req.body);
    res.status(201).json(customer);  // Retorna o cliente criado com status 201
  } catch (error: any) {
    res.status(500).json({ message: error.message });  // Retorna erro 500 se algo der errado
  }
};

// Controlador para obter todos os clientes
export const getAllCustomers = async (req: Request, res: Response) => {
  try {
    const customers = await customerService.getAllCustomers();
    res.status(200).json(customers);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Controlador para obter um cliente pelo ID
export const getCustomerById = async (req: Request, res: Response) => {
  try {
    const customer = await customerService.getCustomerById(req.params.id);
    res.status(200).json(customer);
  } catch (error: any) {
    res.status(404).json({ message: error.message });  // Retorna erro 404 se o cliente não for encontrado
  }
};

// Controlador para atualizar um cliente
export const updateCustomer = async (req: Request, res: Response) => {
  try {
    const customer = await customerService.updateCustomer(req.params.id, req.body);
    res.status(200).json(customer);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Controlador para deletar um cliente
export const deleteCustomer = async (req: Request, res: Response) => {
  try {
    await customerService.deleteCustomer(req.params.id);
    res.status(204).send();  // Retorna status 204 se o cliente for deletado com sucesso
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
