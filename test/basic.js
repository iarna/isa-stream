'use strict'
const test = require('tap').test
const isaStream = require('../index.js')
const stream = require('stream')

test('basic', t => {
  const notStreams = [ 0, '', 'nope', true, false, Symbol(), null, undefined, NaN, Infinity, -Infinity, {}, [], new Date() ]
  notStreams.forEach(value => {
    t.is(isaStream.Readable(value), false, String(value) + ' is not Readable')
    t.is(isaStream.Writable(value), false, String(value) + ' is not Writable')
    t.is(isaStream.Duplex(value), false, String(value) + ' is not Duplex')
  })
  const rstreams = [ new stream.Readable(), new stream.PassThrough() ]
  const wstreams = [ new stream.Writable(), new stream.PassThrough() ]
  const dstreams = [ new stream.PassThrough() ]
  rstreams.forEach(value => {
    t.is(isaStream.Readable(value), true, String(value) + ' is Readable')
  })
  wstreams.forEach(value => {
    t.is(isaStream.Writable(value), true, String(value) + ' is Writable')
  })
  dstreams.forEach(value => {
    t.is(isaStream.Duplex(value), true, String(value) + ' is Duplex')
  })
  
  t.done()
})
