import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket } from 'dgram';
import { Server } from 'http';

@WebSocketGateway(5002, { cors: { origin: '*' } }) // override main port by 3002. 2nd parameter take gateway options like cors, namespace etc.
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  handleConnection(client: any, ...args: any[]) {
    console.log(`New Client Connected ${client.id}`);
    //broadcast message
    // this.server.emit('userJoined', {
    //   message: `New User Joined the chat: ${client.id}`,
    // });
    client.broadcast.emit('userJoined', {
      message: `New User Joined the chat: ${client.id}`,
    });
  }
  handleDisconnect(client: any) {
    console.log(`Client Disconnected ${client.id}`);
    //broadcast message
    this.server.emit('user-left', {
      message: `User Left the chat ${client.id}`,
    });
  }
  @SubscribeMessage('join')
  handleJoin(@ConnectedSocket() client: Socket, @MessageBody() userId: string) {
    console.log(userId);
  }

  @SubscribeMessage('newMessage')
  //   handleMessageEvent(@MessageBody() message: any) {
  //     console.log(message);
  //   }
  // handleMessageEvent(client: Socket, message: any) {
  //   //  console.log(message);
  //   //send message to client from server with 'replay' custom event
  //   client.emit('replay', "Hi!! I'm from server");
  //   //broadcast message
  //   this.server.emit('broadcast', 'This is the Broadcast Message');
  // }
  handleNewMessage(
    @MessageBody() data: string,
    @ConnectedSocket() client: Socket,
  ) {
    this.server.emit('message', data);
  }
}

//listen or connection
//Socket.on()

// send message to a single client
//Socket.emit()

// broadcast message to all client
//io.emit()
