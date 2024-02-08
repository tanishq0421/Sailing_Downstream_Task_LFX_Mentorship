function filterList(inputList) {
    if (inputList.length % 10 !== 0) {
        throw new Error("List length is not a multiple of 10");
    }
    return inputList.filter((item, index) => (index + 1) % 2 !== 0 && (index + 1) % 3 !== 0);
}

module.exports = filterList;