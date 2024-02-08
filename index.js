const filterList = require('./src/filterlList'); 

// Function to parse input from command line (excluding the first two default Node arguments)
function parseInput(inputArgs) {
    return inputArgs.map(Number).filter(n => !isNaN(n));
}

// Main function to use filterList with command line input
function main() {
    const inputArgs = process.argv.slice(2); // Slice off the first two arguments (node and script path)

    if (inputArgs.length === 0) {
        console.error("No input provided. Please provide a list of integers separated by commas (e.g., 1,2,3,4,5,6,7,8,9,10).");
        process.exit(1);
    }

    try {
        const inputList = parseInput(inputArgs[0].split(','));
        const filteredList = filterList(inputList);
        console.log("Filtered List:", filteredList);
    } catch (error) {
        console.error(error.message);
    }
}

main();
