const {expect} = require('chai')
const {KubeMQClient, KubeMQChannel} = require('../index')
const {PingResult, SendQueueMessageResult, ReceiveQueueMessagesResponse} = require('../kubemq-grpc/kubemq_pb')
const b64 = require('../utils/base64')

const client = new KubeMQClient({
    serverAddress: '127.0.0.1:50000'
})
const channel = client.channel({
    name: 'test-channel'
})

describe('send and receive message', () => {
    const message = {
        messageId: 'test',
        body: {
            message: 'hello world'
        }
    }
    it('send - should return successfuly', done => {
        channel.send(message)
            .then(res => {
                expect(res).to.be.instanceOf(SendQueueMessageResult)
                console.log(`res -> `, res)
                done()
            })
            .catch(err => {
                done(err)
            })
    })
    it('receive - should return received message', done => {
        channel.receive()
            .then(res => {
                expect(res).to.be.instanceOf(ReceiveQueueMessagesResponse)
                console.log(`res -> `, res)
                res.getMessagesList().map(msg => {
                    expect(msg.getMessageid()).to.eq(message.messageId)
                    expect(msg.getClientid()).to.eq(client.clientId)
                    expect(msg.getChannel()).to.eq(channel.name)
                    const body = JSON.parse(b64.decode(msg.getBody()))
                    console.log(`body -> `, body)
                    expect(body).to.deep.equal(message.body)
                })
                done()
            })
            .catch(err => {
                done(err)
            })
    })
})