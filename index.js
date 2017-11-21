'use strict'

var isaEventEmitter = function (obj) {
    return obj != null && obj.on
}

exports.Readable = function (stream) {
    return isaEventEmitter(stream) && stream.read && stream.setEncoding
        && stream.resume && stream.pause && stream.pipe
        && stream.unpipe && stream.unshift && stream.wrap
}

exports.Writable = function (stream) {
    return isaEventEmitter(stream) && stream.write && stream.end
}

exports.Duplex = function (stream) {
    return exports.Readable(stream) && exports.Writable(stream)
}

