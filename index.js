'use strict'

var isaEventEmitter = function (obj) {
    return obj != null && 'on' in obj
}

exports.Readable = function (stream) {
    return Boolean(isaEventEmitter(stream) && 'read' in stream && 'setEncoding' in stream
        && 'resume' in stream && 'pause' in stream && 'pipe' in stream
        && 'unpipe' in stream && 'unshift' in stream)
}

exports.Writable = function (stream) {
    return Boolean(isaEventEmitter(stream) && 'write' in stream && 'end' in stream)
}

exports.Duplex = function (stream) {
    return exports.Readable(stream) && exports.Writable(stream)
}
