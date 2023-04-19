const { f } = require('./module.f.cjs')

if (f() !== 'Hello world!') { throw 'no hello' }
