const uuidv4 = require('uuid/v4')
const grpc = require('grpc')
const {kubemqClient} = require('../kubemq-grpc/kubemq_grpc_pb')
const {Empty} = require('../kubemq-grpc/kubemq_pb')
const KubeMQChannel = require('./channel')

function KubeMQClient(options) {
    this.clientId = uuidv4().toString()
    this.client = new kubemqClient(
        options.serverAddress,
        grpc.credentials.createInsecure()
    )
}

KubeMQClient.prototype.getClient = function() {
    return this.client
}

KubeMQClient.prototype.ping = function() {
    return new Promise((resolve, reject) => {
        this.client.ping(new Empty(), (err, res) => {
            if(err) {
                reject(err)
                return
            }
            resolve(res)
        })
    })
}

KubeMQClient.prototype.channel = function(options) {
    const opt = Object.assign({}, {
        client: this
    }, options)
    return new KubeMQChannel(opt)
}

module.exports = KubeMQClient