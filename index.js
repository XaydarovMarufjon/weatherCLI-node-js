import getArgs from './helpers/args.js'
import { printError, printSuccess , printHelp } from './serveices/log.service.js'

const startCLI = () =>{
    const args = getArgs(process.argv)
    if (args.h) {
       printHelp() // help
    }
    if (args.s) {
        // save city
    }
    if (args.t) {
        // save token
    }
    // result 
}


startCLI()
