/*

Question:

function wearPPE() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Wearing PPE'), 2000);
    })
}

function fightCorona() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Fighting Corona'), 1000);
    })
}

function execute() {
    wearPPE().then(result => console.log(result));
    fightCorona().then(result => console.log(result));
}

execute();

Change the flow of the execution of the following snippet. It should log ‘Wearing PPE` first. Conditions:

You cannot change the timeout value
You cannot call fightCorona inside the then() method of wearPPE()

*/

// Answer:

function wearPPE() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Wearing PPE');
        }, 2000);
        
    })
}

async function fightCorona() {
    await wearPPE();
    return new Promise((resolve) => {
        setTimeout(() => resolve('Fighting Corona'), 1000);
    })
}

function execute() {
    wearPPE().then(result => console.log(result));
    fightCorona().then(result => console.log(result));
    
}

execute();
