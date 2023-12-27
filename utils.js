const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sleep(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

function getInput(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

const getFloatingInput = async (placeholder) => {
    do {
        const input = await getInput(placeholder);

        if (!isNaN(parseFloat(input)) && parseFloat(input) > 0) {
            return parseFloat(input);
        }
        console.log("Invalid Input. Please enter a number");
    } while (true);
}

const getFloatingInputWrapper = async (i, name) => {
    return await getFloatingInput(`Enter the ${name} of Player${i + 1}: `);
}

const rlClose = () => {
    rl.close()
}

module.exports = {
    sleep,
    rlClose,
    getInput,
    getFloatingInput,
    getFloatingInputWrapper
}