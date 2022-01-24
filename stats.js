const os = require('os')

const { freemen, totalmem } = os

console.log(`${parseInt(freemen() / 1024 / 1024)} MB` , totalmem())
