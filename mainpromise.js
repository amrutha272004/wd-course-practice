import fs from "fs/mainpromise"; 



let a=await fs.readFile("ammu.txt");

let b=await fs.appendFile("ammu.txt","\n\n\n is amazing")

console.log(a.toString(),b);