// Requirements
const EventEmitter = require('events')
const generator = require('generate-password')


// Create class event
class PassGen extends EventEmitter {

    gen(id) {
        //Fire event
        this.emit('idAndPassGen', { id: id, password: generator.generate({length: 10, numbers: true}) })
        console.log(`Id & password generated !`)
    }
}

module.exports = PassGen;

