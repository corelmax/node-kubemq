// package: kubemq
// file: kubemq.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as kubemq_pb from "./kubemq_pb";

interface IkubemqService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sendEvent: IkubemqService_ISendEvent;
    sendEventsStream: IkubemqService_ISendEventsStream;
    subscribeToEvents: IkubemqService_ISubscribeToEvents;
    subscribeToRequests: IkubemqService_ISubscribeToRequests;
    sendRequest: IkubemqService_ISendRequest;
    sendResponse: IkubemqService_ISendResponse;
    sendQueueMessage: IkubemqService_ISendQueueMessage;
    sendQueueMessagesBatch: IkubemqService_ISendQueueMessagesBatch;
    receiveQueueMessages: IkubemqService_IReceiveQueueMessages;
    streamQueueMessage: IkubemqService_IStreamQueueMessage;
    ackAllQueueMessages: IkubemqService_IAckAllQueueMessages;
    ping: IkubemqService_IPing;
}

interface IkubemqService_ISendEvent extends grpc.MethodDefinition<kubemq_pb.Event, kubemq_pb.Result> {
    path: string; // "/kubemq.kubemq/SendEvent"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<kubemq_pb.Event>;
    requestDeserialize: grpc.deserialize<kubemq_pb.Event>;
    responseSerialize: grpc.serialize<kubemq_pb.Result>;
    responseDeserialize: grpc.deserialize<kubemq_pb.Result>;
}
interface IkubemqService_ISendEventsStream extends grpc.MethodDefinition<kubemq_pb.Event, kubemq_pb.Result> {
    path: string; // "/kubemq.kubemq/SendEventsStream"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<kubemq_pb.Event>;
    requestDeserialize: grpc.deserialize<kubemq_pb.Event>;
    responseSerialize: grpc.serialize<kubemq_pb.Result>;
    responseDeserialize: grpc.deserialize<kubemq_pb.Result>;
}
interface IkubemqService_ISubscribeToEvents extends grpc.MethodDefinition<kubemq_pb.Subscribe, kubemq_pb.EventReceive> {
    path: string; // "/kubemq.kubemq/SubscribeToEvents"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<kubemq_pb.Subscribe>;
    requestDeserialize: grpc.deserialize<kubemq_pb.Subscribe>;
    responseSerialize: grpc.serialize<kubemq_pb.EventReceive>;
    responseDeserialize: grpc.deserialize<kubemq_pb.EventReceive>;
}
interface IkubemqService_ISubscribeToRequests extends grpc.MethodDefinition<kubemq_pb.Subscribe, kubemq_pb.Request> {
    path: string; // "/kubemq.kubemq/SubscribeToRequests"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<kubemq_pb.Subscribe>;
    requestDeserialize: grpc.deserialize<kubemq_pb.Subscribe>;
    responseSerialize: grpc.serialize<kubemq_pb.Request>;
    responseDeserialize: grpc.deserialize<kubemq_pb.Request>;
}
interface IkubemqService_ISendRequest extends grpc.MethodDefinition<kubemq_pb.Request, kubemq_pb.Response> {
    path: string; // "/kubemq.kubemq/SendRequest"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<kubemq_pb.Request>;
    requestDeserialize: grpc.deserialize<kubemq_pb.Request>;
    responseSerialize: grpc.serialize<kubemq_pb.Response>;
    responseDeserialize: grpc.deserialize<kubemq_pb.Response>;
}
interface IkubemqService_ISendResponse extends grpc.MethodDefinition<kubemq_pb.Response, kubemq_pb.Empty> {
    path: string; // "/kubemq.kubemq/SendResponse"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<kubemq_pb.Response>;
    requestDeserialize: grpc.deserialize<kubemq_pb.Response>;
    responseSerialize: grpc.serialize<kubemq_pb.Empty>;
    responseDeserialize: grpc.deserialize<kubemq_pb.Empty>;
}
interface IkubemqService_ISendQueueMessage extends grpc.MethodDefinition<kubemq_pb.QueueMessage, kubemq_pb.SendQueueMessageResult> {
    path: string; // "/kubemq.kubemq/SendQueueMessage"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<kubemq_pb.QueueMessage>;
    requestDeserialize: grpc.deserialize<kubemq_pb.QueueMessage>;
    responseSerialize: grpc.serialize<kubemq_pb.SendQueueMessageResult>;
    responseDeserialize: grpc.deserialize<kubemq_pb.SendQueueMessageResult>;
}
interface IkubemqService_ISendQueueMessagesBatch extends grpc.MethodDefinition<kubemq_pb.QueueMessagesBatchRequest, kubemq_pb.QueueMessagesBatchResponse> {
    path: string; // "/kubemq.kubemq/SendQueueMessagesBatch"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<kubemq_pb.QueueMessagesBatchRequest>;
    requestDeserialize: grpc.deserialize<kubemq_pb.QueueMessagesBatchRequest>;
    responseSerialize: grpc.serialize<kubemq_pb.QueueMessagesBatchResponse>;
    responseDeserialize: grpc.deserialize<kubemq_pb.QueueMessagesBatchResponse>;
}
interface IkubemqService_IReceiveQueueMessages extends grpc.MethodDefinition<kubemq_pb.ReceiveQueueMessagesRequest, kubemq_pb.ReceiveQueueMessagesResponse> {
    path: string; // "/kubemq.kubemq/ReceiveQueueMessages"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<kubemq_pb.ReceiveQueueMessagesRequest>;
    requestDeserialize: grpc.deserialize<kubemq_pb.ReceiveQueueMessagesRequest>;
    responseSerialize: grpc.serialize<kubemq_pb.ReceiveQueueMessagesResponse>;
    responseDeserialize: grpc.deserialize<kubemq_pb.ReceiveQueueMessagesResponse>;
}
interface IkubemqService_IStreamQueueMessage extends grpc.MethodDefinition<kubemq_pb.StreamQueueMessagesRequest, kubemq_pb.StreamQueueMessagesResponse> {
    path: string; // "/kubemq.kubemq/StreamQueueMessage"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<kubemq_pb.StreamQueueMessagesRequest>;
    requestDeserialize: grpc.deserialize<kubemq_pb.StreamQueueMessagesRequest>;
    responseSerialize: grpc.serialize<kubemq_pb.StreamQueueMessagesResponse>;
    responseDeserialize: grpc.deserialize<kubemq_pb.StreamQueueMessagesResponse>;
}
interface IkubemqService_IAckAllQueueMessages extends grpc.MethodDefinition<kubemq_pb.AckAllQueueMessagesRequest, kubemq_pb.AckAllQueueMessagesResponse> {
    path: string; // "/kubemq.kubemq/AckAllQueueMessages"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<kubemq_pb.AckAllQueueMessagesRequest>;
    requestDeserialize: grpc.deserialize<kubemq_pb.AckAllQueueMessagesRequest>;
    responseSerialize: grpc.serialize<kubemq_pb.AckAllQueueMessagesResponse>;
    responseDeserialize: grpc.deserialize<kubemq_pb.AckAllQueueMessagesResponse>;
}
interface IkubemqService_IPing extends grpc.MethodDefinition<kubemq_pb.Empty, kubemq_pb.PingResult> {
    path: string; // "/kubemq.kubemq/Ping"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<kubemq_pb.Empty>;
    requestDeserialize: grpc.deserialize<kubemq_pb.Empty>;
    responseSerialize: grpc.serialize<kubemq_pb.PingResult>;
    responseDeserialize: grpc.deserialize<kubemq_pb.PingResult>;
}

export const kubemqService: IkubemqService;

export interface IkubemqServer {
    sendEvent: grpc.handleUnaryCall<kubemq_pb.Event, kubemq_pb.Result>;
    sendEventsStream: grpc.handleBidiStreamingCall<kubemq_pb.Event, kubemq_pb.Result>;
    subscribeToEvents: grpc.handleServerStreamingCall<kubemq_pb.Subscribe, kubemq_pb.EventReceive>;
    subscribeToRequests: grpc.handleServerStreamingCall<kubemq_pb.Subscribe, kubemq_pb.Request>;
    sendRequest: grpc.handleUnaryCall<kubemq_pb.Request, kubemq_pb.Response>;
    sendResponse: grpc.handleUnaryCall<kubemq_pb.Response, kubemq_pb.Empty>;
    sendQueueMessage: grpc.handleUnaryCall<kubemq_pb.QueueMessage, kubemq_pb.SendQueueMessageResult>;
    sendQueueMessagesBatch: grpc.handleUnaryCall<kubemq_pb.QueueMessagesBatchRequest, kubemq_pb.QueueMessagesBatchResponse>;
    receiveQueueMessages: grpc.handleUnaryCall<kubemq_pb.ReceiveQueueMessagesRequest, kubemq_pb.ReceiveQueueMessagesResponse>;
    streamQueueMessage: grpc.handleBidiStreamingCall<kubemq_pb.StreamQueueMessagesRequest, kubemq_pb.StreamQueueMessagesResponse>;
    ackAllQueueMessages: grpc.handleUnaryCall<kubemq_pb.AckAllQueueMessagesRequest, kubemq_pb.AckAllQueueMessagesResponse>;
    ping: grpc.handleUnaryCall<kubemq_pb.Empty, kubemq_pb.PingResult>;
}

export interface IkubemqClient {
    sendEvent(request: kubemq_pb.Event, callback: (error: grpc.ServiceError | null, response: kubemq_pb.Result) => void): grpc.ClientUnaryCall;
    sendEvent(request: kubemq_pb.Event, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kubemq_pb.Result) => void): grpc.ClientUnaryCall;
    sendEvent(request: kubemq_pb.Event, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kubemq_pb.Result) => void): grpc.ClientUnaryCall;
    sendEventsStream(): grpc.ClientDuplexStream<kubemq_pb.Event, kubemq_pb.Result>;
    sendEventsStream(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<kubemq_pb.Event, kubemq_pb.Result>;
    sendEventsStream(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<kubemq_pb.Event, kubemq_pb.Result>;
    subscribeToEvents(request: kubemq_pb.Subscribe, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<kubemq_pb.EventReceive>;
    subscribeToEvents(request: kubemq_pb.Subscribe, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<kubemq_pb.EventReceive>;
    subscribeToRequests(request: kubemq_pb.Subscribe, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<kubemq_pb.Request>;
    subscribeToRequests(request: kubemq_pb.Subscribe, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<kubemq_pb.Request>;
    sendRequest(request: kubemq_pb.Request, callback: (error: grpc.ServiceError | null, response: kubemq_pb.Response) => void): grpc.ClientUnaryCall;
    sendRequest(request: kubemq_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kubemq_pb.Response) => void): grpc.ClientUnaryCall;
    sendRequest(request: kubemq_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kubemq_pb.Response) => void): grpc.ClientUnaryCall;
    sendResponse(request: kubemq_pb.Response, callback: (error: grpc.ServiceError | null, response: kubemq_pb.Empty) => void): grpc.ClientUnaryCall;
    sendResponse(request: kubemq_pb.Response, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kubemq_pb.Empty) => void): grpc.ClientUnaryCall;
    sendResponse(request: kubemq_pb.Response, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kubemq_pb.Empty) => void): grpc.ClientUnaryCall;
    sendQueueMessage(request: kubemq_pb.QueueMessage, callback: (error: grpc.ServiceError | null, response: kubemq_pb.SendQueueMessageResult) => void): grpc.ClientUnaryCall;
    sendQueueMessage(request: kubemq_pb.QueueMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kubemq_pb.SendQueueMessageResult) => void): grpc.ClientUnaryCall;
    sendQueueMessage(request: kubemq_pb.QueueMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kubemq_pb.SendQueueMessageResult) => void): grpc.ClientUnaryCall;
    sendQueueMessagesBatch(request: kubemq_pb.QueueMessagesBatchRequest, callback: (error: grpc.ServiceError | null, response: kubemq_pb.QueueMessagesBatchResponse) => void): grpc.ClientUnaryCall;
    sendQueueMessagesBatch(request: kubemq_pb.QueueMessagesBatchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kubemq_pb.QueueMessagesBatchResponse) => void): grpc.ClientUnaryCall;
    sendQueueMessagesBatch(request: kubemq_pb.QueueMessagesBatchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kubemq_pb.QueueMessagesBatchResponse) => void): grpc.ClientUnaryCall;
    receiveQueueMessages(request: kubemq_pb.ReceiveQueueMessagesRequest, callback: (error: grpc.ServiceError | null, response: kubemq_pb.ReceiveQueueMessagesResponse) => void): grpc.ClientUnaryCall;
    receiveQueueMessages(request: kubemq_pb.ReceiveQueueMessagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kubemq_pb.ReceiveQueueMessagesResponse) => void): grpc.ClientUnaryCall;
    receiveQueueMessages(request: kubemq_pb.ReceiveQueueMessagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kubemq_pb.ReceiveQueueMessagesResponse) => void): grpc.ClientUnaryCall;
    streamQueueMessage(): grpc.ClientDuplexStream<kubemq_pb.StreamQueueMessagesRequest, kubemq_pb.StreamQueueMessagesResponse>;
    streamQueueMessage(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<kubemq_pb.StreamQueueMessagesRequest, kubemq_pb.StreamQueueMessagesResponse>;
    streamQueueMessage(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<kubemq_pb.StreamQueueMessagesRequest, kubemq_pb.StreamQueueMessagesResponse>;
    ackAllQueueMessages(request: kubemq_pb.AckAllQueueMessagesRequest, callback: (error: grpc.ServiceError | null, response: kubemq_pb.AckAllQueueMessagesResponse) => void): grpc.ClientUnaryCall;
    ackAllQueueMessages(request: kubemq_pb.AckAllQueueMessagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kubemq_pb.AckAllQueueMessagesResponse) => void): grpc.ClientUnaryCall;
    ackAllQueueMessages(request: kubemq_pb.AckAllQueueMessagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kubemq_pb.AckAllQueueMessagesResponse) => void): grpc.ClientUnaryCall;
    ping(request: kubemq_pb.Empty, callback: (error: grpc.ServiceError | null, response: kubemq_pb.PingResult) => void): grpc.ClientUnaryCall;
    ping(request: kubemq_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kubemq_pb.PingResult) => void): grpc.ClientUnaryCall;
    ping(request: kubemq_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kubemq_pb.PingResult) => void): grpc.ClientUnaryCall;
}

export class kubemqClient extends grpc.Client implements IkubemqClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public sendEvent(request: kubemq_pb.Event, callback: (error: grpc.ServiceError | null, response: kubemq_pb.Result) => void): grpc.ClientUnaryCall;
    public sendEvent(request: kubemq_pb.Event, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kubemq_pb.Result) => void): grpc.ClientUnaryCall;
    public sendEvent(request: kubemq_pb.Event, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kubemq_pb.Result) => void): grpc.ClientUnaryCall;
    public sendEventsStream(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<kubemq_pb.Event, kubemq_pb.Result>;
    public sendEventsStream(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<kubemq_pb.Event, kubemq_pb.Result>;
    public subscribeToEvents(request: kubemq_pb.Subscribe, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<kubemq_pb.EventReceive>;
    public subscribeToEvents(request: kubemq_pb.Subscribe, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<kubemq_pb.EventReceive>;
    public subscribeToRequests(request: kubemq_pb.Subscribe, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<kubemq_pb.Request>;
    public subscribeToRequests(request: kubemq_pb.Subscribe, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<kubemq_pb.Request>;
    public sendRequest(request: kubemq_pb.Request, callback: (error: grpc.ServiceError | null, response: kubemq_pb.Response) => void): grpc.ClientUnaryCall;
    public sendRequest(request: kubemq_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kubemq_pb.Response) => void): grpc.ClientUnaryCall;
    public sendRequest(request: kubemq_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kubemq_pb.Response) => void): grpc.ClientUnaryCall;
    public sendResponse(request: kubemq_pb.Response, callback: (error: grpc.ServiceError | null, response: kubemq_pb.Empty) => void): grpc.ClientUnaryCall;
    public sendResponse(request: kubemq_pb.Response, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kubemq_pb.Empty) => void): grpc.ClientUnaryCall;
    public sendResponse(request: kubemq_pb.Response, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kubemq_pb.Empty) => void): grpc.ClientUnaryCall;
    public sendQueueMessage(request: kubemq_pb.QueueMessage, callback: (error: grpc.ServiceError | null, response: kubemq_pb.SendQueueMessageResult) => void): grpc.ClientUnaryCall;
    public sendQueueMessage(request: kubemq_pb.QueueMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kubemq_pb.SendQueueMessageResult) => void): grpc.ClientUnaryCall;
    public sendQueueMessage(request: kubemq_pb.QueueMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kubemq_pb.SendQueueMessageResult) => void): grpc.ClientUnaryCall;
    public sendQueueMessagesBatch(request: kubemq_pb.QueueMessagesBatchRequest, callback: (error: grpc.ServiceError | null, response: kubemq_pb.QueueMessagesBatchResponse) => void): grpc.ClientUnaryCall;
    public sendQueueMessagesBatch(request: kubemq_pb.QueueMessagesBatchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kubemq_pb.QueueMessagesBatchResponse) => void): grpc.ClientUnaryCall;
    public sendQueueMessagesBatch(request: kubemq_pb.QueueMessagesBatchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kubemq_pb.QueueMessagesBatchResponse) => void): grpc.ClientUnaryCall;
    public receiveQueueMessages(request: kubemq_pb.ReceiveQueueMessagesRequest, callback: (error: grpc.ServiceError | null, response: kubemq_pb.ReceiveQueueMessagesResponse) => void): grpc.ClientUnaryCall;
    public receiveQueueMessages(request: kubemq_pb.ReceiveQueueMessagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kubemq_pb.ReceiveQueueMessagesResponse) => void): grpc.ClientUnaryCall;
    public receiveQueueMessages(request: kubemq_pb.ReceiveQueueMessagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kubemq_pb.ReceiveQueueMessagesResponse) => void): grpc.ClientUnaryCall;
    public streamQueueMessage(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<kubemq_pb.StreamQueueMessagesRequest, kubemq_pb.StreamQueueMessagesResponse>;
    public streamQueueMessage(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<kubemq_pb.StreamQueueMessagesRequest, kubemq_pb.StreamQueueMessagesResponse>;
    public ackAllQueueMessages(request: kubemq_pb.AckAllQueueMessagesRequest, callback: (error: grpc.ServiceError | null, response: kubemq_pb.AckAllQueueMessagesResponse) => void): grpc.ClientUnaryCall;
    public ackAllQueueMessages(request: kubemq_pb.AckAllQueueMessagesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kubemq_pb.AckAllQueueMessagesResponse) => void): grpc.ClientUnaryCall;
    public ackAllQueueMessages(request: kubemq_pb.AckAllQueueMessagesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kubemq_pb.AckAllQueueMessagesResponse) => void): grpc.ClientUnaryCall;
    public ping(request: kubemq_pb.Empty, callback: (error: grpc.ServiceError | null, response: kubemq_pb.PingResult) => void): grpc.ClientUnaryCall;
    public ping(request: kubemq_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kubemq_pb.PingResult) => void): grpc.ClientUnaryCall;
    public ping(request: kubemq_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kubemq_pb.PingResult) => void): grpc.ClientUnaryCall;
}
