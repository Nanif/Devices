import * as amqp from 'amqplib';
import {ClientProxy, ReadPacket, WritePacket} from '@nestjs/microservices';
import {Injectable} from "@nestjs/common";


export class RabbitMQClient extends ClientProxy {
    private host:string = 'amqp://localhost';
    private requestChannel;
    private responseChannel;
    private server;
    constructor() {
        super();
        this.init();
    }

    private async init(){
        try {
            this.server = await amqp.connect(this.host);
            this.requestChannel = await this.server.createChannel();
            this.responseChannel = await this.server.createChannel();
            this.responseChannel.assertQueue('queue1', {durable: false});
            this.requestChannel.assertQueue('queue2', {durable: false});
            this.responseChannel.consume('queue1', (message) => this.handleMessage(message), {noAck: true});
        }catch (e) {
            console.log(e);
        }
    }
    public async sendSingleMessage(messageObj) {
        this.requestChannel.sendToQueue('queue2', Buffer.from(JSON.stringify(messageObj)));
    }

    private handleMessage(message) {
        const { content } = message;
        console.log(content+ 'data with manipulation')
        const { err, response, disposed } = JSON.parse(content.toString());
    }

    public getQueues() {
        // return { pub: `${this.queue}_pub`, sub: `${this.queue}_sub` };
    }

    close(): any {
    }

    connect(): Promise<any> {
        return undefined;
    }

   dispatchEvent<T = any>(packet: ReadPacket<any>): Promise<T> {
       return undefined;
   }

    protected publish(packet: ReadPacket<any>, callback: (packet: WritePacket) => void): Function {
        return undefined;
    }
}