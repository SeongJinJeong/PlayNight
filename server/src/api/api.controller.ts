import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Post('/getIp')
  getIp(@Body() ipBody: { ipAddress: string }): object {
    if (ipBody.ipAddress) {
      return {
        msg: 'Success',
        ipAddress: ipBody.ipAddress,
      };
    } else {
      return {
        msg: 'Fail',
      };
    }
  }
}
