import {
    WebSocketGateway,
    WebSocketServer,
    SubscribeMessage,
    OnGatewayConnection,
    OnGatewayDisconnect
} from '@nestjs/websockets';


@WebSocketGateway()
export class ChatGateway implements OnGatewayConnection,
    OnGatewayDisconnect {


    @WebSocketServer() server;
    users: number = 0;

    async handleConnection() {
        // A client has connected
        this.users++;

        // Notify connected clients of current users
        this.server.emit('users', this.users);

    }

    async handleDisconnect() {

        // A client has disconnected
        this.users--;

        // Notify connected clients of current users
        this.server.emit('users', this.users);

    }

    @SubscribeMessage('newTarget')
    async onAddTarget(client, message) {
        this.server.emit('updateTarget', message);
        // client.broadcast.emit('updateTarget', message);
    }
}