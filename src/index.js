module.exports = function reverse (n) {
    let result = '';

    if (n < 0) {
        n = -n;
    }

    let convertN = String(n);
    
    for (i = convertN.length - 1; i >= 0; i--) {
    result += `${convertN[i]}`;
  }
    return +result;
}
