import {
    PingResult, 
    ReceiveQueueMessagesRequest, 
    ReceiveQueueMessagesResponse,
    SendQueueMessageResult,
    QueueMessage
} from './kubemq-grpc/kubemq_pb'

import { kubemqClient,  } from './kubemq-grpc/kubemq_grpc_pb';

export as namespace KubeMQ;

export interface ServerOptions {
    serverAddress: string
}

export interface ChannelOptions {
    name: string
}

export interface ReceiveQueueMessagesOptions {
    maxNumberOfMessage: number
    waitTimeSeconds: number
    requestId: string
    isPeak: boolean
}

declare class KubeMQChannel {
    constructor(options: ChannelOptions);
    receive(options?: ReceiveQueueMessagesOptions): Promise<ReceiveQueueMessagesResponse>;
    send(message: QueueMessage): Promise<SendQueueMessageResult>;

    name: string;
    client: KubeMQClient;
}

declare class KubeMQClient {
    constructor(options: ServerOptions);
    ping(): Promise<PingResult>;
    channel(options?: ChannelOptions): KubeMQChannel;

    client: kubemqClient;
    clientId: string;
}

