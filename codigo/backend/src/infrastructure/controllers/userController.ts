import { Request, Response } from 'express';
import { UserService } from '../../application/ports/userService';

const userService = new UserService();

// Controlador para login
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = await userService.loginUser(email, password);

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({
      id: user.id,
      username: user.username,
      email: user.email,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
