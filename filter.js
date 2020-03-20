// Implement filter function
function filter(inputArr, searchTerm) {
    if(!inputArr.length) throw Error("input cannot be empty");
    if(!searchTerm) throw Error("search term cannot be empty");
    return inputArr.filter(function(arrayElement) {
        return arrayElement.url.toLowerCase().includes(searchTerm.toLowerCase());
    });
}

module.exports = filter;