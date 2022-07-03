function delayedResultPromise(n1, n2, delayTime) {
    // your code here
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(n1 + n2);
        }, delayTime);
    });
}
delayedResultPromise(4, 5, 3000).then(console.log);

async function main() {
    // your code here, you should call delayedResultPromise here and
    // get the result using async/await.
    let response = await delayedResultPromise(4, 5, 3000);
    await console.log(response);
}
main(); // result will be shown in the console after <delayTime> seconds;
