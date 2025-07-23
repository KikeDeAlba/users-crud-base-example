import {
  BadRequestException,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { VALID_TOKEN } from '../data/tokens';

@Injectable()
export class ValidateTokenMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.header('authorization'); // Bearer hola
    const tokenWithoutBearer = token?.replace('Bearer ', ''); // hola

    if (tokenWithoutBearer !== VALID_TOKEN) {
      next(new BadRequestException('El token es shino pendejo we'));
    }

    next();
  }
}
