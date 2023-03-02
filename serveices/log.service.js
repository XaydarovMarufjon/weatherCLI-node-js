import chalk from "chalk";
import dedent from "dedent-js";

const printError = (error) =>{
    console.log(chalk.bgRed("Error") + " " + error);
}
const printSuccess= (message) =>{
    console.log(chalk.bgGreen("Success") + " " + message);
}

const printHelp= (message) =>{
    console.log(dedent`
     ${chalk.bgYellow(" HElP ")}
=============================================================    
     ${chalk.bgGreenBright(" -s ")} [CITY] for install city
     ${chalk.bgGreenBright(" -h ")} for help
     ${chalk.bgGreenBright(" -t ")} {API_KEY} for saving token

    `);
}


export  {printError ,   printSuccess , printHelp}