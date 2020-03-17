module.exports = function reverse(n) {
    let revert = String(n)
        .split("")
        .reverse()
        .join("");
    return parseInt(revert);
};
