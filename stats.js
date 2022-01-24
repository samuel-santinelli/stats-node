const os = require('os')

setInterval(() => {
    const { freemem, totalmem } = os

    const result = parseInt(totalmem() / 1024 / 1024)
    const memory = parseInt(freemem() / 1024 / 1024)
    const percents = parseInt((memory / result) * 100)
    
    const stats = {
        free: `${memory} MB`,
        result: `${result} MB`,
        usage: `${percents}%`
    }
    console.clear()
    console.log("=== PC STATS ===")
    console.log(stats)
}, 1000)

