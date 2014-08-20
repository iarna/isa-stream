"use strict";

var isaEventEmitter = function (obj) {
    return obj.on
}

exports.Readable = function (stream) {
    return isaEventEmitter && stream.read && stream.setEncoding
        && stream.resume && stream.pause && stream.pipe
        && stream.unpipe && stream.unshift && stream.wrap;
}

exports.Writable = function (stream) {
    return isaEventEmitter && stream.write && stream.end;
}

exports.Duplex = function (stream) {
    return exports.Readable(stream) && exports.Writable(stream);
}

