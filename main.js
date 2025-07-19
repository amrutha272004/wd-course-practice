const fs=require("fs")
const fs=require("fs/mainpromise")

console.log("starting")

fs.writeFile("ammu.txt","good best",()=>{
    console.log("file created")
})
fs.readFile("ammu.txt","utf-8",(err,data)=>{
    console.log(err,data.toString())
})

fs.appendFile("ammu.txt"," and better",(e,d)=>{
    console.log("file updated")
})

