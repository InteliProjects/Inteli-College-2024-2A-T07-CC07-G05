import { Request, Response } from 'express';
import { OrderService } from '../../application/ports/orderService';

const orderService = new OrderService();

export const createOrder = async (req: Request, res: Response) => {
  try {
    const order = await orderService.createOrder(req.body);
    res.status(201).json(order);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateOrderStatus = async (req: Request, res: Response) => {
  try {
    const order = await orderService.updateOrderStatus(req.params.id, req.body.status);
    res.status(200).json(order);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getOrderById = async (req: Request, res: Response) => {
  try {
    const order = await orderService.getOrderById(req.params.id);
    res.status(200).json(order);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const listOrdersByCustomer = async (req: Request, res: Response) => {
  try {
    const orders = await orderService.listOrdersByCustomer(req.params.customerId);
    res.status(200).json(orders);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const listOrdersByStore = async (req: Request, res: Response) => {
  try {
    const orders = await orderService.listOrdersByStore(req.params.storeId);
    res.status(200).json(orders);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteOrder = async (req: Request, res: Response) => {
  try {
    await orderService.deleteOrder(req.params.id);
    res.status(204).send();
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
