import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiService {
  logIp(ip: string): void {
    console.log(` {
        msg: 'Success',
        ipAddress: ${ip},
    }`);
  }
}
