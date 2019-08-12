function encode(input) {
    const buff = new Buffer(input, 'utf8')
    return buff.toString('base64')
}

function decode(input) {
    const buff = new Buffer(input, 'base64')
    return buff.toString('utf8')
}

module.exports = {
    encode, 
    decode
}