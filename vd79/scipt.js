let a=prompt("enetr first number")

let b=prompt("enetr second number")

if (isNaN(a) || isNaN(b))
 {
   throw SyntaxError("sry this is not allowed")
}

let sum=parseInt(a)+parseInt(b)

console.log("sum of two numbers is ",sum)


function main(){
    let x=1;
    try{
        console.log("the sum is",sum*x)
        return true
    }

    catch(error){
        console.log("error")
        return false
    }
    finally{
        console.log("this is finally block")
    }
}  
let c=main()