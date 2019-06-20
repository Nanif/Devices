import {Client} from "@nestjs/microservices";
import {RabbitMQClient} from "./RabbitMQ.service";
import {Inject, Injectable} from "@nestjs/common";

@Injectable()
export class ClientService {
    constructor(private readonly client :RabbitMQClient) {
        // this.client = new ('amqp://localhost', 'myQueue');
        // this.client.init();
    }

    calc() {
        this.client.sendSingleMessage('messageToQuque')
    }
}
