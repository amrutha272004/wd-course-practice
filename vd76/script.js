 function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("data loaded");
        }, 5000);
    })
}



async function main() {

console.log("loading")

console.log("doing smtg else")

console.log("load data")

let data = await getData()

console.log(data)

console.log("process data")

console.log("task 2")
}

main()