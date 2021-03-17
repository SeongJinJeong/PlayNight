import { Injectable } from '@nestjs/common';
import { truncateSync } from 'fs';
import loginDTO from 'src/dto/login-transfer-dto';

@Injectable()
export class ApiService {
  logIp(ip: string): void {
    console.log(` {
        msg: 'Success',
        ipAddress: ${ip},
    }`);
  }

  loginAuth(data: loginDTO): Boolean {
    if (data.id === 'admin' && data.password === '1234') {
      return true;
    } else {
      return false;
    }
  }
}
