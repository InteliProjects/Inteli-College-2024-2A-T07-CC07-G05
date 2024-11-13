import { Request, Response } from 'express';
import { OrderProductService } from '../../application/ports/orderProductService';

const orderProductService = new OrderProductService();

export const createOrderProduct = async (req: Request, res: Response) => {
  try {
    const orderProduct = await orderProductService.createOrderProduct(req.body);
    res.status(201).json(orderProduct);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getOrderProductById = async (req: Request, res: Response) => {
  try {
    const orderProduct = await orderProductService.getOrderProductById(req.params.id);
    res.status(200).json(orderProduct);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const getOrderProductsByOrder = async (req: Request, res: Response) => {
  try {
    const orderProducts = await orderProductService.getOrderProductsByOrder(req.params.orderId);
    res.status(200).json(orderProducts);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getOrderProductsByProduct = async (req: Request, res: Response) => {
  try {
    const orderProducts = await orderProductService.getOrderProductsByProduct(req.params.productId);
    res.status(200).json(orderProducts);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteOrderProduct = async (req: Request, res: Response) => {
  try {
    await orderProductService.deleteOrderProduct(req.params.id);
    res.status(204).send();
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
