const {expect} = require('chai')
const {KubeMQClient, KubeMQChannel} = require('../index')
const {PingResult} = require('../kubemq-grpc/kubemq_pb')

const client = new KubeMQClient({
    serverAddress: '127.0.0.1:50000'
})

describe('ping', () => {
    it('should return server info', done => {
        client.ping()
            .then(res => {
                expect(res).to.be.instanceOf(PingResult)
                done()
            })
            .catch(err => {
                done(err)
            })
    })
})

describe('channel', () => {
    it('should return KubeMQChannel instance', done => {
        const channelOptions = {
            name: 'test-channel'
        }
        const channel = client.channel(channelOptions)
        expect(channel).to.be.instanceOf(KubeMQChannel)
        expect(channel.name).to.equal(channelOptions.name)
        done()
    })
})