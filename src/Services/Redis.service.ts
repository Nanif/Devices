import {
    WebSocketGateway,
    SubscribeMessage,
    WsResponse
} from '@nestjs/websockets';

import {IoAdapter} from '@nestjs/platform-socket.io';
import * as redisIoAdapter from 'socket.io-redis';

const redisAdapter = redisIoAdapter({host: 'localhost', port: 6379});

@WebSocketGateway()
export class RedisIoAdapter extends IoAdapter {

    public static server;

    createIOServer(port: number, options?: any): any {
        const server = super.createIOServer(port, options);
        server.adapter(redisAdapter);
        RedisIoAdapter.server = server;


        RedisIoAdapter.server.on('connection', (socket) => {
            socket.broadcast.emit('updateTarget', 'socket added');
            // socket.to('room42').emit('hello', "to all clients in 'room42' room except sender");
        });

        return server;
    }

    @SubscribeMessage('newTarget')
    async onNewMessage(client, message){
        client.broadcast.emit('newMessage', message);
    }

    // sendMessage(client, message) {
    //     console.log('arririririrfirfir');
    //     RedisIoAdapter.server.emit('updateTarget', message);
    // }
}

