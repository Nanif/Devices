import {
    WebSocketGateway,
    WebSocketServer,
    SubscribeMessage,
    OnGatewayConnection,
    OnGatewayDisconnect
} from '@nestjs/websockets';

import {IoAdapter} from '@nestjs/platform-socket.io';
import * as redisIoAdapter from 'socket.io-redis';
const redisAdapter = redisIoAdapter({ host: 'localhost', port: 6379 });

@WebSocketGateway()
export class RedisIoAdapter extends IoAdapter {

    public static server;

    createIOServer(port: number, options?: any): any {
        console.log('create');
        const server = super.createIOServer(port, options);
        server.adapter(redisAdapter);
        RedisIoAdapter.server = server;


        RedisIoAdapter.server.on('connection', (socket) => {
            socket.broadcast.emit('hello', 'new target added');
            socket.to('room42').emit('hello', "to all clients in 'room42' room except sender");
        });

        return server;
    }





    async handleConnection() {

        console.log('heeiiiiiiiiii');

        RedisIoAdapter.server.emit('users', 'user added');

    }
}

