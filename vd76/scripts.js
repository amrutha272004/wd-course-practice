function delayedMessage() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Hello, this is a delayed message!")
        },2000);
    })
} 

async function showMessage() {
  let message= await delayedMessage();
  console.log(message);
}

showMessage();