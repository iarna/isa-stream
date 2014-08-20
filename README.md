isa-stream
----------

Ducktype stream matching, lets you check objects for stream identity without
worrying if they're a Node.js stream object or a readable-stream.

Usage
-----

```javascript
    var isaStream = require('isa-stream');

    if (isaStream.Readable(mystream)) { ... }
```

Details
-------

Provides Readable, Writable and Duplex matchers.
