import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import { ApiService } from './api.service';

import ipDTO from '../dto/ip-transfer-dto';
import loginDTO from '../dto/login-transfer-dto';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Post('/getIp')
  // @HttpCode(204)
  getIp(@Body() ipBody: ipDTO): object {
    if (typeof ipBody.ip === 'string') {
      this.apiService.logIp(ipBody.ip);
      return {
        msg: 'Ip Request Succeed',
        currentIp: ipBody.ip,
      };
    } else {
      console.log(`Fail + ${ipBody}`);

      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Ip Request Failed',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  // @Post('/login')
  // loginAuth(@Body() loginData: loginDTO): object {}
}
