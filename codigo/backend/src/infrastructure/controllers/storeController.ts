import { Request, Response } from 'express';
import { StoreService } from '../../application/ports/storeService';

const storeService = new StoreService();

export const createStore = async (req: Request, res: Response) => {
  try {
    const store = await storeService.createStore(req.body);
    res.status(201).json(store);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllStores = async (req: Request, res: Response) => {
  try {
    const stores = await storeService.getAllStores();
    res.status(200).json(stores);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getStoreById = async (req: Request, res: Response) => {
  try {
    const store = await storeService.getStoreById(req.params.id);
    res.status(200).json(store);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const listStoresByCEP = async (req: Request, res: Response) => {
  try {
    const stores = await storeService.listStoresByCEP(req.params.cep);
    res.status(200).json(stores);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateStore = async (req: Request, res: Response) => {
  try {
    const store = await storeService.updateStore(req.params.id, req.body);
    res.status(200).json(store);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteStore = async (req: Request, res: Response) => {
  try {
    await storeService.deleteStore(req.params.id);
    res.status(204).send();
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
