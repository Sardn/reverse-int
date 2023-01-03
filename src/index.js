module.exports = function reverse(n) {
    let a = Math.abs(n).toString();
    let b = a.split('').reverse().join('');
    return b;
}
