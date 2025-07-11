let crctnumber=5;
let guess

while(Number(guess!==crctnumber))
{
    guess=promt("enter crct number");
    if(Number(guess)!==crctnumber)
        {
        console.log("try again");
    }
}

console.log("uh guessed it right")