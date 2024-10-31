import { ConfigService } from '@nestjs/config';

export const jwtConstants = {
  secret: process.env.NEST_JWT_SECRET_KEY,
};
console.log(jwtConstants.secret);
