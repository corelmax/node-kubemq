const uuidv4 = require('uuid/v4')
const {ReceiveQueueMessagesRequest, QueueMessage, QueueMessageAttributes, QueueMessagePolicy} = require('../kubemq-grpc/kubemq_pb')
const b64 = require('../utils/base64')

function KubeMQChannel(options) {
    this.name = options.name
    this.client = options.client
}

KubeMQChannel.prototype.receive = function(options) {
    const opts = Object.assign({}, {
        maxNumberOfMessage: 1,
        waitTimeSeconds: 0,
        requestId: uuidv4().toString(),
        isPeak: false,
    }, options)
    const request = new ReceiveQueueMessagesRequest()
    request.setChannel(this.name)
    request.setClientid(this.client.clientId)
    request.setMaxnumberofmessages(opts.maxNumberOfMessage)
    request.setWaittimeseconds(opts.waitTimeSeconds)
    request.setRequestid(opts.requestId)
    request.setIspeak(opts.isPeak)

    return new Promise((resolve, reject) => {
        this.client.getClient().receiveQueueMessages(request, (err, res) => {
            if(err) {
                reject(err)
                return
            }
            resolve(res)
        })
    })
}

KubeMQChannel.prototype.send = function(message) {
    const msg = Object.assign({}, {
        messageId: uuidv4().toString(),
    }, message)

    const queueMsg = new QueueMessage()
    queueMsg.setChannel(this.name)
    queueMsg.setClientid(this.client.clientId)
    queueMsg.setMessageid(msg.messageId)
    queueMsg.setBody(b64.encode(JSON.stringify(msg.body)))

    return new Promise((resolve, reject) => {
        this.client.getClient().sendQueueMessage(queueMsg, (err, res) => {
            const error = err || res.getError()
            if(error) {
                reject(error)
                return
            }
            
            resolve(res)
        })
    })
}

module.exports = KubeMQChannel