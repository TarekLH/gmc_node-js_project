// Requirements
const fs = require('fs')
const path = require('path')


//? First problem

//const { helloWorld } = require('./problems/first_Problem/hello-world')


//? Second Problem

//const miniServ = require('./problems/second_Problem/mini-server')


//? Third Problem

//TODO: 1

//* Create and write into file

/*console.log("Going to create and write into file !");

//Note: With .writeFile() the third parameter object (options) hold by default: encoding: utf8 and flag: 'w'( 'w': Opens file for writing. The file is created (if it does not exist) or truncated (if it exists).)
fs.writeFile(path.join(__dirname, '/problems/third_Problem', 'welcome.txt'), 'Hello Node', err => {
    if (err) throw err;

    console.log("File created and data written successfully!")

    //* Read file
    console.log("Let's read newly written data");

    fs.readFile(path.join(__dirname, '/problems/third_Problem', 'welcome.txt'), (err, data) => {
        if (err) throw err;

        console.log('Folder Readed: ' + data.toString())
    })
})*/

//TODO: 2

//* Read and console.log data from a (manually) created file

/*console.log("Let's read datas from an existing file");

fs.readFile(path.join(__dirname, '/problems/third_Problem', 'hello.txt'), (err, data) => {
    if (err) throw err;

    console.log('Folder Readed: ' + data.toString())
})*/


//? Fourth Problem

/*const PassGen = require('./problems/fourth_Problem/password-generator.js')

const passGenerator = new PassGen()

passGenerator.on('idAndPassGen', (data) => {
    console.log('Called Listener: ', data)

    // Append id and generated passeword in note.txt file
    fs.appendFile(path.join(__dirname, '/problems/fourth_Problem/note.txt'), `Your id: ${data.id}, with generated password: ${data.password} \n`, err => {

        if (err) throw err;
        console.log("Id & password appended to note.txt")
    })
})

passGenerator.gen('Enter your id here')
passGenerator.gen('First person')
passGenerator.gen('Another person')*/


//? Fifth Problem

    const sendmail = require('./problems/fifth_Problem/email-sender')



