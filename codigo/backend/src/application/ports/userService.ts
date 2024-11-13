import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';  // Para comparar senhas

const prisma = new PrismaClient();

export class UserService {
  // Método para login
  async loginUser(email: string, password: string) {
    try {
      const user = await prisma.user.findUnique({
        where: { email: email },
      });

      if (user && bcrypt.compareSync(password, user.password)) {
        return user;
      }

      return null;
    } catch (error: any) {
      throw new Error('Error logging in user: ' + error.message);
    }
  }
}
