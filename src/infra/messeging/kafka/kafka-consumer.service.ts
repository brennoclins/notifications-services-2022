import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';
import { env } from 'process';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    const SERVER = env.UPSTASH_KAFKA_SERVER;
    const USERNAME = env.UPSTASH_KAFKA_REST_USERNAME;
    const PASSWORD = env.UPSTASH_KAFKA_REST_PASSWORD;

    if (SERVER === undefined) {
      throw new Error('Server uptash note found!');
    }

    if (USERNAME === undefined || PASSWORD === undefined) {
      throw new Error('Authentication sever error!');
    }

    super({
      client: {
        clientId: 'notifications',
        brokers: [SERVER],
        sasl: {
          mechanism: 'scram-sha-256',
          username: USERNAME,
          password: PASSWORD,
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
