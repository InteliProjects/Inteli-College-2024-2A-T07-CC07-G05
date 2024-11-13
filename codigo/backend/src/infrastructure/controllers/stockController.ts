import { Request, Response } from 'express';
import { StockService } from '../../application/ports/stockService';

const stockService = new StockService();

export const createStock = async (req: Request, res: Response) => {
  try {
    const stock = await stockService.createStock(req.body);
    res.status(201).json(stock);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateStock = async (req: Request, res: Response) => {
  try {
    const stock = await stockService.updateStock(req.params.id, req.body);
    res.status(200).json(stock);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getStockById = async (req: Request, res: Response) => {
  try {
    const stock = await stockService.getStockById(req.params.id);
    res.status(200).json(stock);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const getStockByStore = async (req: Request, res: Response) => {
  try {
    const stock = await stockService.getStockByStore(req.params.storeId);
    res.status(200).json(stock);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getStockByProduct = async (req: Request, res: Response) => {
  try {
    const stock = await stockService.getStockByProduct(req.params.productId);
    res.status(200).json(stock);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteStock = async (req: Request, res: Response) => {
  try {
    await stockService.deleteStock(req.params.id);
    res.status(204).send();
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
